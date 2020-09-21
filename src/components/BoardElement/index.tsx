import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";

import squareElements from "elements/squareElements";

import Game from "types/Game";

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

interface BoardProps {
  games: Game[],
  activeGame: Game,
  loading: boolean,
};

const BoardElement = ({ games, activeGame, loading }: BoardProps) => {
  const loadingRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    loadingRef.current?.scrollIntoView({ block: "center", inline: "center" });
  }, []);

  if (loading) {
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
      {!loading &&
        activeGame.board.squares.map((row) => (
          <Row key={`rowkey: x: ${row[0].x}, y:${row[0].y}`}>
            {row.map((square) => {
              const key = `squarekey: x: ${square.x}, y: ${square.y}`;
              switch (square.type) {
                case 0:
                  return (
                    <squareElements.WhiteSquare key={key}>
                      <p>{square.letter?.stringValue}</p>
                      <squareElements.LetterMultiplier>
                        {square.letter?.scoreValue}
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

export default BoardElement;
