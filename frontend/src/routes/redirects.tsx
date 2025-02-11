import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingPage } from '@app/components/loading-page/loading-page';
import { useIsAuthenticated } from '@app/hooks/use-user';
import { useTranslation } from '@app/language/use-translation';
import { AppEventEnum } from '@app/logging/error-report/action';
import { addAppEvent } from '@app/logging/error-report/error-report';
import { useIsAuthenticatedQuery } from '@app/redux-api/user/api';
import { login } from '@app/user/login';

export const LoginIfUnauthorized = () => {
  const { user_loader } = useTranslation();
  const { data } = useIsAuthenticated();

  useEffect(() => {
    if (data === false) {
      login();
    }
  }, [data]);

  if (data === true) {
    return <Outlet />;
  }

  return <LoadingPage>{user_loader.loading_user}</LoadingPage>;
};

export const UpgradeSession = () => {
  const { user_loader } = useTranslation();
  const { isLoading, data } = useIsAuthenticatedQuery();

  // Upgrade session if user is authenticated and has selvbetjening token but not tokenx.
  // No session at all is allowed.
  const shouldUpgradeSession = data?.selvbetjening === true && data?.tokenx === false;

  useEffect(() => {
    if (shouldUpgradeSession) {
      addAppEvent(AppEventEnum.UPGRADE_SESSION);
      login();
    }
  }, [shouldUpgradeSession]);

  if (isLoading || shouldUpgradeSession) {
    return <LoadingPage>{user_loader.loading_user}</LoadingPage>;
  }

  return <Outlet />;
};
