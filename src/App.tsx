import React from "react";
import styled from "styled-components/macro";

import Board from "components/Board";
import Menu from "components/Menu";
import { TABLET_MQ } from "constants/mediaQueries";

const MainContainer = styled.div`
  display: flex;
  min-width: 100vw;
`;

const Layout = styled.div`
  ${TABLET_MQ} {
    margin: auto;
  }
  display: flex;
  width: fit-content;
  padding-bottom: 7.5rem;
`;

const App = () => {
  return (
    <MainContainer>
      <Layout>
        <Menu />
        <Board />
      </Layout>
    </MainContainer>
  );
};

export default App;
