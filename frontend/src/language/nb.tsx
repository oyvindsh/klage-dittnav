/* eslint-disable max-lines */
import { BodyShort, Link } from '@navikt/ds-react';
import { format } from 'date-fns';
import React from 'react';
import { PRETTY_FORMAT } from '@app/components/date-picker/constants';
import { ExternalLink } from '@app/components/link/link';
import { ErrorMessageKeys } from '@app/language/error-messages';
import { Utfall } from '@app/redux-api/case/anke/types';
import { Reason } from '@app/redux-api/case/klage/types';
import { CaseStatus } from '@app/redux-api/case/types';

export type Language = typeof nb;

export const nb = {
  inngang: {
    title_postfix: 'klage eller anke',
    guide_panel: {
      general_info: [
        <BodyShort key="1" spacing>
          Hvis du har fått et vedtak fra NAV og du er uenig i vedtaket, har du rett til å klage eller anke. Les mer om{' '}
          <ExternalLink
            href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/klage-ris-og-ros/klagerettigheter"
            inline
          >
            dine klagerettigheter
          </ExternalLink>
          .
        </BodyShort>,
      ].map((c, index) => <span key={index}>{c}</span>),
      login_info: [
        <BodyShort key="2" spacing>
          For at du skal få best mulig brukeropplevelse, anbefaler vi deg å <Link href="/oauth2/login">logge inn</Link>{' '}
          før du går videre.
        </BodyShort>,
        <ExternalLink key="external-id" href="https://www.norge.no/nb/digital-borger/elektronisk-id" inline>
          Slik skaffer du deg elektronisk ID.
        </ExternalLink>,
      ],
    },
    hovedkategorier: {
      title: 'Klage eller anke på vedtak',
      chooseInnsendingsytelse: 'Hvilket tema gjelder saken?',
    },
    kategorier: {
      title: 'Hvilken tjeneste eller ytelse gjelder saken?',
    },
    innsendingsvalg: {
      title: 'Hva vil du?',
      common: {
        warning: 'Klagen eller anken din lagres i nettleseren inntil fanen lukkes, selv om du ikke er logget inn.',
      },
      klage: {
        title: 'Klage på vedtak fra NAV',
        description: {
          logged_in_digital: 'Du kan sende inn klagen og vedlegg digitalt her.',
          logged_out_digital:
            'Hvis du logger deg inn kan du sende inn klagen og vedlegg digitalt her. Du kan fortsette uten å logge deg inn, men husk at du da må skrive ut klagen, signere den og sende den via post.',
        },
      },
      anke: {
        title: 'Anke på vedtak fra NAV Klageinstans',
        description: {
          logged_in_digital: 'Du kan sende inn anken og vedlegg digitalt her.',
          logged_out_digital:
            'Hvis du logger deg inn kan du sende inn anken og vedlegg digitalt her. Du kan fortsette uten å logge deg inn, men husk at du da må skrive ut anken, signere den og sende den via post.',
        },
      },
      ettersendelse: {
        title: 'Ettersendelse til klage eller anke',
        description:
          'Har du klaget eller anket på et vedtak og ønsker å ettersende dokumentasjon eller sende inn nye/endrede opplysninger i saken din, kan du trykke her for å få hjelp til å sende inn dette via post.',
      },
    },
  },
  ettersendelse: {
    title: 'Ettersende dokumentasjon på tidligere innsendt klage/anke',
    send_by_post: 'Send via post til:',
    employer_info_logged_out:
      'Hvis du er en arbeidsgiver må legge inn fødselsnummeret eller D-nummeret til den arbeidstakeren som ettersendelsen gjelder for, skrive ut forsiden og signere som arbeidsgiver.',
    employer_info_logged_in:
      'Hvis du er en arbeidsgiver må du logge ut og legge inn fødselsnummeret eller D-nummeret til den arbeidstakeren som ettersendelsen gjelder for, skrive ut forsiden og signere som arbeidsgiver.',
    guide_text:
      'For å kunne ettersende dokumentasjon må du først skrive ut en forside som NAV har laget for deg. Denne skal ligge øverst. Følg oppskriften på forsiden.',
    enhet: {
      radio_title:
        'Har du mottatt et brev fra NAV Klageinstans eller et brev fra en annen enhet i NAV om at saken din er sendt til NAV Klageinstans?',
      select_title: 'Hvilken enhet mottok du brevet fra?',
      none: 'Velg enhet',
    },
  },
  klageskjema_post: {
    common: {
      title_fragment: 'klage',
      steps: ['Begrunnelse', 'Oppsummering', 'Innsending'],
      page_title: 'Klage på vedtak',
    },
    has_attachments_label: 'Jeg skal sende med vedlegg.',
    should_log_in_digital:
      'Hvis du logger deg inn kan du sende inn klagen og vedlegg digitalt her. Du kan fortsette uten å logge deg inn, men husk at du da må skrive ut klagen, signere den og sende den via post.',
    employer_info:
      'Som arbeidsgiver må du sende klagen i posten. Du legger inn fødselsnummeret eller D-nummeret til den arbeidstakeren som vedtaket gjelder for, skriver ut klagen og signerer som arbeidsgiver.',
    innsending: {
      title: 'Hva gjør du nå?',
      steg: [
        'Skriv ut klagen. Ved utskrift kommer en forside som NAV har laget for deg. Denne skal ligge øverst. Følg oppskriften på forsiden.',
        'Signer forsiden og siste side i klagen.',
        'Legg ved vedleggene.',
        'Send via post til ',
      ],
      steg_simple: ['Skriv ut klagen.', 'Signer klagen.', 'Legg ved vedleggene.', 'Send via post til '],
    },
  },
  klageskjema: {
    employer_info:
      'Hvis du er en arbeidsgiver må du logge ut og sende klagen i posten. Du legger inn fødselsnummeret eller D-nummeret til den arbeidstakeren som vedtaket gjelder for, skriver ut klagen og signerer som arbeidsgiver.',
    common: {
      title_fragment: 'klage',
      page_title: 'Klage på vedtak',
      steps: ['Begrunnelse', 'Oppsummering', 'Kvittering'],
    },
    begrunnelse: {
      reasons: {
        title: 'Hva gjelder klagen? (valgfri)',
        not_specified: 'Ikke spesifisert.',
        texts: {
          [Reason.AVSLAG_PAA_SOKNAD]: 'Jeg har fått avslag på søknaden min',
          [Reason.FOR_LITE_UTBETALT]: 'Jeg har fått for lite utbetalt',
          [Reason.UENIG_I_NOE_ANNET]: 'Jeg er uenig i noe annet i vedtaket mitt',
          [Reason.UENIG_I_VEDTAK_OM_TILBAKEBETALING]: 'Jeg er uenig i vedtaket om tilbakebetaling',
        },
      },
      vedtak_date: {
        title: 'Vedtaksdato (valgfri)',
      },
      saksnummer: {
        title: 'Saksnummer (valgfri)',
        internalTitle: 'Saksnummer',
        change: 'Endre',
      },
      begrunnelse_text: {
        title: 'Hvorfor er du uenig?',
        placeholder: 'Skriv inn din begrunnelse her.',
        description:
          'Forklar med dine egne ord hva som gjør at du er uenig og hva du ønsker endret. Legg ved dokumenter som kan vise NAV hvorfor du er uenig.',
      },
      autosave: {
        popover: 'Vi lagrer endringene dine automatisk.',
        saving: 'Lagrer',
        saved: 'Lagret',
        failed: 'Klarte ikke lagre',
      },
      attachments: {
        clear_errors: 'Fjern feilmeldinger',
        title: 'Vedlegg',
        upload_button_text: 'Last opp nytt vedlegg',
        description: 'Har du informasjon du ønsker å legge ved, laster du det opp her.',
        supported_types: [
          'Filtyper som støttes: ',
          <b key="png">PNG</b>,
          ', ',
          <b key="jpeg">JPEG</b>,
          ' og ',
          <b key="pdf">PDF</b>,
          '.',
        ].map((c, index) => <span key={index}>{c}</span>),
        size_limit:
          'Filstørrelsen kan ikke være større enn 8 MB, og total størrelse av alle vedlegg kan ikke være større enn 32 MB.',
      },
      next_button: 'Gå videre',
      delete_title: 'Slett klagen og returner til hovedsiden',
    },
    summary: {
      title: 'Se over før du sender inn',
      submit_error: 'Klarte ikke sende inn klagen. Ukjent feil.',
      sections: {
        person: {
          title: <>Person&shy;opplysninger</>,
          info_from: 'Hentet fra Folkeregisteret og Kontakt- og reserverasjonsregisteret.',
        },
        case: {
          title: 'Opplysninger fra saken',
          vedtak: 'Vedtaksdato',
          no_date: 'Ingen dato satt',
          saksnummer: 'Saksnummer',
          not_specified: 'Ikke angitt',
          from_system: 'Hentet fra internt system',
        },
        begrunnelse: {
          title: 'Begrunnelse i klagen din',
          what: 'Hva gjelder klagen?',
          why: 'Hvorfor er du uenig?',
          documents: 'Vedlagte dokumenter',
        },
      },
      next: (status: CaseStatus): string => (status === CaseStatus.DRAFT ? 'Send inn' : 'Se innsendt klage'),
      post_link: 'Last ned hvis du heller ønsker å sende via post',
    },
    kvittering: {
      title: 'Kvittering for innsendt klage',
      download: 'Se og last ned klagen din',
      sent: 'Sendt inn',
      general_info: {
        title: 'Nå er resten vårt ansvar',
        description:
          'Du trenger ikke gjøre noe mer. Vi tar kontakt med deg hvis det er noe vi lurer på eller hvis vi trenger flere opplysninger fra deg. Om det viser seg at du har glemt å sende inn noe dokumentasjon til saken din, så kan dette ettersendes ved å trykke på "Ettersende dokumentasjon på tidligere innsendt klage/anke" på ytelsen det gjelder.',
      },
      read_more: [
        'Du kan lese mer om hvordan vi behandler klagen din videre på våre ',
        <ExternalLink
          key="tema"
          href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/klage-ris-og-ros/klagerettigheter"
          inline
        >
          temasider om klage og anke
        </ExternalLink>,
        '.',
      ].map((c, index) => <span key={index}>{c}</span>),
      dine_saker: {
        title: 'Se dine saker på Ditt NAV',
        url: 'https://person.nav.no/mine-saker/',
      },
      loading: {
        title: 'Sender inn klage...',
        still_working: 'Jobber fortsatt...',
      },
    },
  },
  ankeskjema_post: {
    common: {
      title_fragment: 'Anke',
      steps: ['Begrunnelse', 'Oppsummering', 'Innsending'],
      page_title: 'Anke på vedtak',
    },
    has_attachments_label: 'Jeg skal sende med vedlegg.',
    should_log_in_digital:
      'Hvis du logger deg inn kan du sende inn anken og vedlegg digitalt her. Du kan fortsette uten å logge deg inn, men husk at du da må skrive ut anken, signere den og sende den via post.',
    employer_info:
      'Som arbeidsgiver må du sende anken i posten. Du legger inn fødselsnummeret eller D-nummeret til den arbeidstakeren som vedtaket gjelder for, skriver ut anken og signerer som arbeidsgiver.',
    innsending: {
      title: 'Hva gjør du nå?',
      steg: [
        'Skriv ut anken. Ved utskrift kommer en forside som NAV har laget for deg. Denne skal ligge øverst. Følg oppskriften på forsiden.',
        'Signer anken.',
        'Legg ved vedleggene.',
        'Send via post til ',
      ],
      steg_simple: ['Skriv ut anken.', 'Signer anken.', 'Legg ved vedleggene.', 'Send via post til '],
    },
  },
  ankeskjema: {
    employer_info:
      'Hvis du er en arbeidsgiver må du logge ut og sende anken i posten. Du legger inn fødselsnummeret eller D-nummeret til den arbeidstakeren som vedtaket gjelder for, skriver ut anken og signerer som arbeidsgiver.',
    common: {
      title_fragment: 'anke',
      page_title: 'Anke på vedtak',
      steps: ['Begrunnelse', 'Oppsummering', 'Kvittering'],
    },
    begrunnelse: {
      vedtak_date: {
        title: 'Dato for klagevedtaket fra NAV Klageinstans',
      },
      saksnummer: {
        title: 'Saksnummer (valgfri)',
        internalTitle: 'Saksnummer',
        change: 'Endre',
      },
      klageenhet: {
        title: 'Enhet oppgitt i klagevedtaket under informasjon om retten til å anke',
        not_specified: 'Ingen enhet valgt',
      },
      begrunnelse_text: {
        title: 'Hvorfor er du uenig i klagevedtaket?',
        placeholder: 'Skriv inn din begrunnelse her.',
        description:
          'Forklar med dine egne ord hva som gjør at du er uenig i klagevedtaket og hva du ønsker endret. Legg ved eventuelle dokumenter du ønsker skal følge saken din til Trygderetten',
      },
      autosave: {
        popover: 'Vi lagrer endringene dine automatisk.',
        saving: 'Lagrer',
        saved: 'Lagret',
        failed: 'Klarte ikke lagre',
      },
      attachments: {
        title: 'Vedlegg',
        upload_button_text: 'Last opp nytt vedlegg',
        description: 'Har du informasjon du ønsker å legge ved, laster du det opp her.',
        supported_types: [
          'Filtyper som støttes: ',
          <b key="png">PNG</b>,
          ', ',
          <b key="jpeg">JPEG</b>,
          ' og ',
          <b key="pdf">PDF</b>,
          '.',
        ].map((c, index) => <span key={index}>{c}</span>),
        size_limit:
          'Filstørrelsen kan ikke være større enn 8 MB, og total størrelse av alle vedlegg kan ikke være større enn 32 MB.',
        clear_errors: 'Fjern feilmeldinger',
      },
      next_button: 'Gå videre',
      delete_title: 'Slett anken og returner til hovedsiden',
    },
    summary: {
      title: 'Se over før du sender inn',
      submit_error: 'Klarte ikke sende inn anken. Ukjent feil.',
      sections: {
        person: {
          title: <>Person&shy;opplysninger</>,
          info_from: 'Hentet fra Folkeregisteret og Kontakt- og reserverasjonsregisteret.',
        },
        case: {
          title: 'Opplysninger fra saken',
          vedtak: 'Dato for klagevedtaket fra NAV Klageinstans',
          no_date: 'Ingen dato satt',
          saksnummer: 'Saksnummer',
          klageenhet: 'Enhet oppgitt i klagevedtaket under informasjon om retten til å anke',
          not_specified: 'Ikke angitt',
          from_system: 'Hentet fra internt system',
        },
        begrunnelse: {
          title: 'Begrunnelse i anken din',
          why: 'Beskrivelse i din anke',
          documents: 'Vedlagte dokumenter',
        },
      },
      next: (status: CaseStatus): string => (status === CaseStatus.DRAFT ? 'Send inn' : 'Se innsendt anke'),
      post_link: 'Last ned hvis du heller ønsker å sende via post',
    },
    kvittering: {
      title: 'Kvittering for innsendt anke',
      download: 'Se og last ned anken din',
      sent: 'Sendt inn',
      general_info: {
        title: 'Nå er resten vårt ansvar',
        description:
          'Du trenger ikke gjøre noe mer. Vi tar kontakt med deg hvis det er noe vi lurer på eller hvis vi trenger flere opplysninger fra deg. Om det viser seg at du har glemt å sende inn noe dokumentasjon til saken din, så kan dette ettersendes ved å trykke på "Ettersende dokumentasjon på tidligere innsendt klage/anke" på ytelsen det gjelder.',
      },
      read_more: [
        'Du kan lese mer om hvordan vi behandler anken din videre på våre ',
        <ExternalLink
          key="tema"
          href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/klage-ris-og-ros/klagerettigheter"
          inline
        >
          tema-sider om klage og anke
        </ExternalLink>,
        '.',
      ],
      dine_saker: {
        title: 'Se dine saker på Ditt NAV',
        url: 'https://person.nav.no/mine-saker/',
      },
      loading: {
        title: 'Sender inn anke...',
        still_working: 'Jobber fortsatt...',
      },
    },
  },
  klage_create: {
    create_error: 'Klarte ikke opprette klage',
  },
  anke_create: {
    create_error: 'Klarte ikke opprette anke',
  },
  user_loader: {
    loading_user: 'Laster bruker...',
  },
  klage_loader: {
    loading_klage: 'Laster klage...',
    format_error: (klageId: string, error: Error) => `Klarte ikke hente klage med ID "${klageId}". ${error.message}`,
  },
  anke_loader: {
    loading_anke: 'Laster anke...',
    format_error: (ankeInternalSaksnummer: string, error: Error) =>
      `Klarte ikke hente anke med ID "${ankeInternalSaksnummer}". ${error.message}`,
  },
  landing_page: {
    checking_user: 'Sjekker bruker...',
  },
  not_found_page: {
    title: 'Finner ikke siden',
    go_back: 'Gå tilbake til startsiden',
  },
  utfall: {
    [Utfall.TRUKKET]: 'Trukket',
    [Utfall.RETUR]: 'Retur',
    [Utfall.OPPHEVET]: 'Opphevet',
    [Utfall.MEDHOLD]: 'Omgjort',
    [Utfall.DELVIS_MEDHOLD]: 'Delvis omgjort',
    [Utfall.OPPRETTHOLDT]: 'Stadfestet',
    [Utfall.UGUNST]: 'Omgjort',
    [Utfall.AVVIST]: 'Avvist',
  },
  kvittering: {
    see_estimate: [
      'Du kan se ',
      <ExternalLink key="saksbehandlingstid" href="https://www.nav.no/saksbehandlingstider" inline>
        forventet saksbehandlingstid for klage og anke
      </ExternalLink>,
      ' i egen oversikt.',
    ].map((c, index) => <span key={index}>{c}</span>),
  },
  error_messages: {
    [ErrorMessageKeys.MAX_UPLOAD_SIZE]: 'Filstørrelsen kan ikke være større enn 8 MB.',
    [ErrorMessageKeys.TOO_LARGE]: 'Filstørrelsen kan ikke være større enn 8 MB.',
    [ErrorMessageKeys.TOTAL_TOO_LARGE]: 'Total filstørrelse kan ikke være større enn 32 MB.',
    [ErrorMessageKeys.ENCRYPTED]: 'Vi mistenker at filen din er kryptert, den kan derfor ikke sendes med.',
    [ErrorMessageKeys.EMPTY]: 'Du kan ikke sende med en tom fil.',
    [ErrorMessageKeys.VIRUS]: 'Vi mistenker at filen din inneholder et virus, den kan derfor ikke sendes med.',
    [ErrorMessageKeys.FILE_COULD_NOT_BE_CONVERTED]:
      'Du har prøvd å legge til et vedlegg med et format vi ikke støtter. Vedlegg er begrenset til PNG, JPEG, og PDF.',
    skjema: {
      title: 'Feil i skjema',
      fnr_dnr_or_npid: 'Du må fylle inn et gyldig fødselsnummer, D-nummer eller NPID.',
      vedtak_date:
        'Du må enten la feltet stå tomt, eller fylle inn en dato som er en gyldig dato, og som ikke er i fremtiden.',
      vedtak_date_required: 'Du må fylle inn en dato som er en gyldig dato og som ikke er i fremtiden.',
      fornavn: 'Du må fylle inn fornavn og mellomnavn.',
      etternavn: 'Du må fylle inn etternavn.',
      begrunnelse: 'Du må skrive en begrunnelse før du går videre.',
      enhet: 'Du må velge en enhet.',
    },
    date: {
      invalid_format: 'Du må velge en gyldig dato.',
      invalid_range: (from: Date, to: Date) =>
        `Du må velge en dato som er mellom ${format(from, PRETTY_FORMAT)} og ${format(to, PRETTY_FORMAT)}`,
    },
  },
  common: {
    loading: 'Laster...',
    logged_out: 'Du har blitt logget ut. For å fortsette trenger du bare å logge inn igjen.',
    log_in: 'Logg inn',
    generic_error: 'Noe gikk galt. Vennligst prøv igjen senere.',
    fnr_dnr_or_npid: 'Fødselsnummer, D-nummer eller NPID',
    fornavn: 'For- og mellomnavn',
    etternavn: 'Etternavn',
    download: 'Last ned / skriv ut',
    back: 'Tilbake',
    last_changed: 'Sist endret',
    delete: 'Slett',
    cancel: 'Avbryt',
    yes: 'Ja',
    no: 'Nei',
    expires_in: (exp: string) => `Du vil bli logget ut ${exp}. For å fortsette trenger du bare logge inn igjen.`,
  },
  personalised: {
    draft_klager: {
      title: 'Påbegynte klager',
    },
    draft_anker: {
      title: 'Påbegynte anker',
    },
    available_anker: {
      title: 'Avslåtte klager',
      klage_date: 'Klagens vedtaksdato',
    },
  },
};
