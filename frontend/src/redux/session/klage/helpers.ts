import dayjs, { extend } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { ISessionKlage } from '@app/components/klage/uinnlogget/types';
import { Innsendingsytelse } from '@app/innsendingsytelser/innsendingsytelser';
import { Languages } from '@app/language/types';
import { SessionKey } from '../types';

extend(utc);

export const getSessionKlageKey = (key: SessionKey): string => `klage-${key}`;

export const createSessionKlage = (
  language: Languages,
  innsendingsytelse: Innsendingsytelse,
  internalSaksnummer: string | null = null,
): ISessionKlage => ({
  innsendingsytelse,
  foedselsnummer: '',
  navn: {
    fornavn: '',
    etternavn: '',
  },
  fritekst: '',
  internalSaksnummer,
  userSaksnummer: null,
  vedtakDate: null,
  checkboxesSelected: [],
  language,
  hasVedlegg: false,
  modifiedByUser: dayjs().utc(true).toISOString(),
});
