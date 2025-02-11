import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { getOnBehalfOfAccessToken } from '@app/auth/on-behalf-of';
import { getTokenXClient } from '@app/auth/token-x-client';
import { OBO_CLIENT_IDS, PROXIED_CLIENT_IDS } from '@app/config/config';
import { getLogger } from '@app/logger';

const log = getLogger('proxy');

export const setupProxy = async () => {
  const authClient = await getTokenXClient();
  const router = Router();

  OBO_CLIENT_IDS.forEach((appName) => {
    const route = `/api/${appName}`;

    router.use(route, async (req, res, next) => {
      const tokenXtoken = req.header('Authorization');

      if (typeof tokenXtoken === 'string') {
        try {
          const obo_access_token = await getOnBehalfOfAccessToken(authClient, tokenXtoken, appName);
          req.headers['authorization'] = `Bearer ${obo_access_token}`;
          req.headers['idporten-token'] = tokenXtoken;
        } catch (error) {
          log.warn({
            msg: `Failed to prepare request with OBO token for route ${route}`,
            error,
            data: { appName },
          });
        }
      }

      next();
    });
  });

  PROXIED_CLIENT_IDS.forEach((appName) => {
    const proxy = createProxyMiddleware({
      target: `http://${appName}`,
      pathRewrite: {
        [`^/api/${appName}`]: '',
      },
      onError: (error, req, res) => {
        if (res.headersSent) {
          log.error({
            msg: 'Headers already sent.',
            error,
            data: {
              appName,
              statusCode: res.statusCode,
              url: req.originalUrl,
              method: req.method,
            },
          });

          return;
        }

        res.writeHead(500, { 'Content-Type': 'application/json' });
        const body = JSON.stringify({ error: `Failed to connect to API. Reason: ${error.message}` });
        res.end(body);
        log.error({
          msg: 'Failed to connect to API.',
          error,
          data: { appName, url: req.originalUrl, method: req.method },
        });
      },
      logLevel: 'warn',
      logProvider: () => ({
        log: (msg: string) => log.info({ msg, data: { appName } }),
        info: (msg: string) => log.info({ msg, data: { appName } }),
        debug: (msg: string) => log.debug({ msg, data: { appName } }),
        warn: (msg: string) => log.warn({ msg, data: { appName } }),
        error: (msg: string) => log.error({ msg, data: { appName } }),
      }),
      changeOrigin: true,
    });

    router.use(`/api/${appName}`, proxy);
  });

  return router;
};
