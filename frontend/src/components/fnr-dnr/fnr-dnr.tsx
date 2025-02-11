import { BodyShort, Loader } from '@navikt/ds-react';
import React from 'react';
import { displayFnr } from '@app/functions/display';
import { useTranslation } from '@app/language/use-translation';
import { FormFieldsIds } from '../case/common/form-fields-ids';
import { FnrDnrInput } from '../fnr-dnr-input/fnr-dnr-input';
import { InformationPointBox } from '../information-point-box/information-point-box';

interface Props {
  fnr?: string;
  userFnr: string;
  onChange: (fnr: string) => void;
  onError: (id: FormFieldsIds, error?: string) => void;
  error: string | undefined;
  isLoading: boolean;
}

export const FnrDnr = ({ fnr, userFnr, onChange, onError, error, isLoading }: Props) => {
  const { common } = useTranslation();

  if (isLoading) {
    return (
      <InformationPointBox header={common.fnr_dnr_or_npid}>
        <Loader size="small" />
      </InformationPointBox>
    );
  }

  if (typeof fnr === 'string') {
    return (
      <InformationPointBox header={common.fnr_dnr_or_npid}>
        <BodyShort>{displayFnr(fnr)}</BodyShort>
      </InformationPointBox>
    );
  }

  return <FnrDnrInput onChange={onChange} onBlur={onChange} onError={onError} error={error} value={userFnr} />;
};
