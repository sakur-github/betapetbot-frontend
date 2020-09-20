import React from "react";
import styled from "styled-components/macro";

import Board from "components/Board";
import Menu from "components/Menu";

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`;

const Layout = styled.div`
  margin: auto;
  display: flex;
  width: fit-content;
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
