import React from 'react';
import Begrunnelse from '../../components/begrunnelse/begrunnelse';

const BegrunnelsePage = (props: any) => (
    <Begrunnelse
        activeVedtak={props.activeVedtak}
        next={() => props.next()}
    />
);

export default BegrunnelsePage;
