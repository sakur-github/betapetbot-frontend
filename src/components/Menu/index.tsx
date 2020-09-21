import React, { useState } from "react";
import styled from "styled-components/macro";

import squareElements from "styled/squareElements";
import Letter from "types/Letter";

const Wrapper = styled.div<MenuInteractiveProps>`
  display: flex;
  position: fixed;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ expanded }) => (expanded ? "90%" : "7.5rem")};
  z-index: 1;
  transition: height 1s ease;
`;

const Container = styled.div`
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
  position: absolute;
  right: -1rem;
  top: -2.5rem;
  transition: transform 0.8s ease;
  ${({ expanded }) =>
    expanded
      ? "transform: scale(0.4) rotate(0deg);"
      : "transform: scale(0.4) rotate(180deg);"};
`;

interface TriangleProps {
  readonly canClick: boolean;
}

interface MenuInteractiveProps {
  readonly expanded: boolean;
}

const AMOUNT_OF_GAMES: number = 10;

const AVAILABLE_LETTERS: Letter[] = [
  { letter: "F", multiplier: 1 },
  { letter: "U", multiplier: 2 },
  { letter: "C", multiplier: 3 },
  { letter: "K", multiplier: 4 },
  { letter: "Y", multiplier: 5 },
  { letter: "O", multiplier: 6 },
  { letter: "U", multiplier: 7 },
];

const Menu = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [menuExpanded, setMenuExpanded] = useState(false);

  const canClickPrevious = activeGame !== 0;
  const canClickNext = activeGame !== AMOUNT_OF_GAMES - 1;

  const previousGame = () => {
    if (canClickPrevious) {
      setActiveGame(activeGame - 1);
    }
  };

  const nextGame = () => {
    if (canClickNext) {
      setActiveGame(activeGame + 1);
    }
  };

  return (
    <>
      <Wrapper expanded={menuExpanded}>
        <ExpandButton
          expanded={menuExpanded}
          onClick={() => setMenuExpanded(!menuExpanded)}
        >
          <CutDiamond />
        </ExpandButton>
        <Container>
          <ControlsContainer>
            <TriangleLeft
              canClick={canClickPrevious}
              onClick={() => previousGame()}
            />
            <p>Game {activeGame + 1}</p>
            <TriangleRight canClick={canClickNext} onClick={() => nextGame()} />
          </ControlsContainer>
          <AvailableLettersContainer>
            {AVAILABLE_LETTERS.map((letter) => (
              <squareElements.WhiteSquare>
                <p>{letter.letter}</p>
                <squareElements.LetterMultiplier>
                  {letter.multiplier}
                </squareElements.LetterMultiplier>
              </squareElements.WhiteSquare>
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
