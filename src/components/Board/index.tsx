import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";

import Squares from "types/Squares";
import squareElements from "styled/squareElements";

import defaultSquares from "./defaultSquares";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 47.25rem;
  min-height: 47.25rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Board = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [games, setGames] = useState();
  const [activeSquares, setActiveSquares] = useState<Squares>(defaultSquares);
  const [loaded, setLoaded] = useState(false);
  const loadingRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    fetch("https://betapetbot.herokuapp.com/game")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.games);
        setActiveSquares(data.games[0].board.squares);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setActiveSquares(defaultSquares);
      });
    loadingRef.current?.scrollIntoView({ block: "center", inline: "center" });
  }, []);

  if (!loaded) {
    return (
      <Container>
        <h1 ref={loadingRef} style={{ margin: "auto" }}>
          Loading...
        </h1>
      </Container>
    );
  }

  return (
    <Container>
      {loaded &&
        activeSquares.map((row) => (
          <Row key={`rowkey: x: ${row[0].x}, y:${row[0].y}`}>
            {row.map((letter) => {
              const key = `squarekey: x: ${letter.x}, y: ${letter.y}`;
              switch (letter.type) {
                case 0:
                  return (
                    <squareElements.WhiteSquare key={key}>
                      <p>{letter.letter}</p>
                      <squareElements.LetterMultiplier>
                        1
                      </squareElements.LetterMultiplier>
                    </squareElements.WhiteSquare>
                  );
                case 1:
                  return (
                    <squareElements.YellowSquare key={key}>
                      <p>2x ord</p>
                    </squareElements.YellowSquare>
                  );
                case 2:
                  return (
                    <squareElements.RedSquare key={key}>
                      <p>3x ord</p>
                    </squareElements.RedSquare>
                  );
                case 3:
                  return (
                    <squareElements.BeigeSquare key={key}>
                      <p>2x bok</p>
                    </squareElements.BeigeSquare>
                  );
                case 4:
                  return (
                    <squareElements.GreySquare key={key}>
                      <p>3x bok</p>
                    </squareElements.GreySquare>
                  );
                default:
                  return <squareElements.EmptySquare key={key} />;
              }
            })}
          </Row>
        ))}
    </Container>
  );
};

export default Board;
