import { styled } from 'styled-components';
import { desktopHeight } from './media-queries';

const MainContainer = styled.main`
  padding-bottom: 128px;
  min-height: 75vh;

  @media ${desktopHeight.desktopL} {
    min-height: 80vh;
  }
  @media ${desktopHeight.desktop4K} {
    min-height: 85vh;
  }
`;

export const InngangMainContainer = styled(MainContainer)`
  padding-top: 64px;
  background-color: #f1f1f1;
`;

export const FormMainContainer = styled(MainContainer)`
  padding-bottom: 128px;
  background-color: #fff;
`;
