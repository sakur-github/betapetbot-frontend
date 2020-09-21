import React, { useState } from "react";
import { Swipeable } from "react-swipeable";
import styled from "styled-components/macro";

import SquareElements from "elements/SquareElements";

import Game from "types/Game";
import { TABLET_MQ } from "constants/mediaQueries";

const Wrapper = styled.div<MenuInteractiveProps>`
  display: flex;
  position: fixed;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ expanded }) => (expanded ? "90%" : "7.5rem")};
  z-index: 1;
  transition: height 0.5s ease;
`;

const Container = styled(Swipeable)`
  display: flex;
  flex-direction: column;
  background-color: #a3977c;
  width: 95%;
  border-radius: 0.75rem 0.75rem 0 0;
  padding: 0 1rem;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem 0;
`;

const AvailableLettersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem 0;
`;

const TRIANGLE_WIDTH = 24;

const TriangleBase = styled.div<TriangleProps>`
  width: 0;
  height: 0;
  border-top: ${TRIANGLE_WIDTH / 2}px solid transparent;
  border-bottom: ${TRIANGLE_WIDTH / 2}px solid transparent;
  ${({ canClick }) => (canClick ? "cursor: pointer;" : "")}
  opacity: ${({ canClick }) => (canClick ? "1" : "0.25")};
`;

const TriangleRight = styled(TriangleBase)`
  margin-left: 1rem;
  border-left: ${TRIANGLE_WIDTH}px solid red;
`;

const TriangleLeft = styled(TriangleBase)`
  margin-right: 1rem;
  border-right: ${TRIANGLE_WIDTH}px solid red;
`;

const CutDiamond = styled.div`
  border-style: solid;
  border-color: transparent transparent red transparent;
  border-width: 0 25px 25px 25px;
  height: 0;
  width: 50px;
  box-sizing: content-box;
  position: relative;
  margin: 20px 0 50px 0;
  :after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: red transparent transparent transparent;
    border-width: 70px 50px 0 50px;
  }
`;

const ExpandButton = styled.div<MenuInteractiveProps>`
  display: none;
  ${TABLET_MQ} {
    display: block;
    z-index: 3;
    position: absolute;
    right: -1rem;
    top: -2.5rem;
    transition: transform 0.4s ease;
    ${({ expanded }) =>
      expanded
        ? "transform: scale(0.4) rotate(0deg);"
        : "transform: scale(0.4) rotate(180deg);"};
  }
`;

interface TriangleProps {
  readonly canClick: boolean;
}

interface MenuInteractiveProps {
  readonly expanded: boolean;
}

interface MenuProps {
  games: Game[];
  activeGame: Game;
  setActiveGame: React.Dispatch<React.SetStateAction<Game>>;
  loading: boolean;
}

const Menu = ({ games, activeGame, setActiveGame, loading }: MenuProps) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const activeGameIndex = games.indexOf(activeGame);
  const canClickPrevious = activeGameIndex !== 0;
  const canClickNext = activeGameIndex !== games.length - 1;

  const previousGame = () => {
    if (canClickPrevious) {
      setActiveGame(games[activeGameIndex - 1]);
    }
  };

  const nextGame = () => {
    if (canClickNext) {
      setActiveGame(games[activeGameIndex + 1]);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <Wrapper expanded={menuExpanded}>
        <ExpandButton
          expanded={menuExpanded}
          onClick={() => setMenuExpanded(!menuExpanded)}
        >
          <CutDiamond />
        </ExpandButton>
        <Container
          onSwipedUp={() => setMenuExpanded(true)}
          onSwipedDown={() => setMenuExpanded(false)}
        >
          <ControlsContainer>
            <TriangleLeft
              canClick={canClickPrevious}
              onClick={() => previousGame()}
            />
            <p>
              Game {activeGameIndex + 1}{" "}
              <span style={{ fontSize: 18 }}>
                vs {activeGame.opponent.handle}
              </span>{" "}
            </p>
            <TriangleRight canClick={canClickNext} onClick={() => nextGame()} />
          </ControlsContainer>
          <AvailableLettersContainer>
            {activeGame.board.playerState.hand &&
              activeGame.board.playerState.hand.map((letter, index) => (
                <SquareElements.WhiteSquare
                  key={`menu-whitesquarekey-${letter.stringValue}-${letter.scoreValue}-${index}`}
                >
                  <p>{letter.stringValue}</p>
                  <SquareElements.LetterMultiplier>
                    {letter.scoreValue}
                  </SquareElements.LetterMultiplier>
                </SquareElements.WhiteSquare>
              ))}
          </AvailableLettersContainer>
          <>
            <h1>Information</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
        </Container>
      </Wrapper>
    </>
  );
};

export default Menu;
