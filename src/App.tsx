import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { TABLET_MQ } from "constants/mediaQueries";

import BoardElement from "components/BoardElement";
import Menu from "components/Menu";
import defaultGames from "components/BoardElement/defaultGames";

import Game from "shared/types/Game";
import Response from "shared/types/Response";
import validateResponse from "validators/Response.validator";

const FETCH_URL = "https://betapetbot.herokuapp.com/game";

const MainContainer = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
`;

const Layout = styled.div`
  ${TABLET_MQ} {
    margin: auto;
  }
  display: flex;
  width: fit-content;
  padding-bottom: 7.5rem;
`;

const Header = styled.div`
  font-size: 2rem;
  color: white;
  align-self: center;
  text-align: center;
  padding: 0 1rem;
`

const App = () => {
  const [games, setGames] = useState<Game[]>(defaultGames);
  const [activeGame, setActiveGame] = useState<Game>(defaultGames[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(FETCH_URL)
      .then((response) => response.json())
      .then((data: Response) => {
        validateResponse(data);
        setGames(data.games);
        setActiveGame(data.games[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MainContainer>
      <Layout>
        <Menu
          games={games}
          activeGame={activeGame}
          setActiveGame={setActiveGame}
          loading={loading}
        />
        {!loading && !games.length && (
                  <Header>You don't have any active games (or the BE could have trouble)</Header>

        )}
        <BoardElement games={games} activeGame={activeGame} loading={loading} />
      </Layout>
    </MainContainer>
  );
};

export default App;
