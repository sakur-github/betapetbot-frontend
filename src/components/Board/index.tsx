import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import squares from "types/squares";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7c7462;
  min-width: 47.25rem;
  min-height: 47.25rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const DefaultSquare = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  width: 3rem;
  height: 3rem;
  margin-right: 0.15rem;
  margin-bottom: 0.15rem;
  background-color: #e4dac3;
  border-radius: 0.2rem;
`;

const WhiteSquare = styled(DefaultSquare)`
  background-color: #faf7f5;
  color: black;
  font-size: 1.5rem;
  position: relative;
`;

const YellowSquare = styled(DefaultSquare)`
  background-color: #e5b91d;
`;

const RedSquare = styled(DefaultSquare)`
  background-color: #e73a2f;
`;

const BeigeSquare = styled(DefaultSquare)`
  background-color: #b1a87a;
`;

const GreySquare = styled(DefaultSquare)`
  background-color: #b0b0b0;
`;

const LetterMultiplier = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 0.75rem;
  bottom: 0;
  right: 0;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`;

const Board = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [games, setGames] = useState();
  const [activeSquares, setActiveSquares] = useState<squares | undefined>();
  useEffect(() => {
    fetch("https://betapetbot.herokuapp.com/game")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.games);
        setActiveSquares(data.games[0].board.squares);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!activeSquares) {
    return (
      <Container>
        <h1 style={{ margin: "auto" }}>Loading...</h1>
      </Container>
    );
  }

  return (
    <Container>
      {activeSquares &&
        activeSquares.map((row) => (
          <Row key={`rowkey: x: ${row[0].x}, y:${row[0].y}`}>
            {row.map((letter) => {
              const key = `squarekey: x: ${letter.x}, y: ${letter.y}`;
              switch (letter.type) {
                case 0:
                  return (
                    <WhiteSquare key={key}>
                      <p>{letter.letter}</p>
                      <LetterMultiplier>1</LetterMultiplier>
                    </WhiteSquare>
                  );
                case 1:
                  return (
                    <YellowSquare key={key}>
                      <p>2x ord</p>
                    </YellowSquare>
                  );
                case 2:
                  return (
                    <RedSquare key={key}>
                      <p>3x ord</p>
                    </RedSquare>
                  );
                case 3:
                  return (
                    <BeigeSquare key={key}>
                      <p>2x bok</p>
                    </BeigeSquare>
                  );
                case 4:
                  return (
                    <GreySquare key={key}>
                      <p>3x bok</p>
                    </GreySquare>
                  );
                default:
                  return <DefaultSquare key={key} />;
              }
            })}
          </Row>
        ))}
    </Container>
  );
};

export default Board;
