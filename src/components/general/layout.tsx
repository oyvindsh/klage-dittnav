import React from 'react';
import PageTitle from './pageTitle';
import { MasterPaddingContainer, MainContainer } from '../../styled-components/main-styled-components';
import { useSelector } from 'react-redux';
import { Store } from '../../store/reducer';

const Layout = (props: any) => {
    const { chosenYtelse } = useSelector((state: Store) => state);
    const title = `Klage på vedtak for ${chosenYtelse}`;

    return (
        <>
            <PageTitle title={title} />

            <MainContainer>
                <MasterPaddingContainer>{props.children}</MasterPaddingContainer>
            </MainContainer>
        </>
    );
};

export default Layout;
