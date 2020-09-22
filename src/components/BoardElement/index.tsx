import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";

import SquareElements from "elements/SquareElements";
import LoadingSpinner from "components/LoadingSpinner";

import Game from "shared/types/Game";

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

const LoadingContainer = styled.div`
  margin: auto;
`;

interface BoardProps {
  games: Game[];
  activeGame: Game;
  loading: boolean;
}

const BoardElement = ({ games, activeGame, loading }: BoardProps) => {
  const loadingRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    loadingRef.current?.scrollIntoView({ block: "center", inline: "center" });
  }, []);

  if (loading) {
    return (
      <Container>
        <LoadingContainer ref={loadingRef} style={{ margin: "auto" }}>
          <LoadingSpinner />
        </LoadingContainer>
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
                    <SquareElements.WhiteSquare key={key}>
                      <p>{square.letter?.stringValue}</p>
                      <SquareElements.LetterMultiplier>
                        {square.letter?.scoreValue}
                      </SquareElements.LetterMultiplier>
                    </SquareElements.WhiteSquare>
                  );
                case 1:
                  return (
                    <SquareElements.YellowSquare key={key}>
                      <p>2x ord</p>
                    </SquareElements.YellowSquare>
                  );
                case 2:
                  return (
                    <SquareElements.RedSquare key={key}>
                      <p>3x ord</p>
                    </SquareElements.RedSquare>
                  );
                case 3:
                  return (
                    <SquareElements.BeigeSquare key={key}>
                      <p>2x bok</p>
                    </SquareElements.BeigeSquare>
                  );
                case 4:
                  return (
                    <SquareElements.GreySquare key={key}>
                      <p>3x bok</p>
                    </SquareElements.GreySquare>
                  );
                case 6:
                  return (
                    <SquareElements.StartSquare key={key}>
                      <p>START</p>
                    </SquareElements.StartSquare>
                  );
                default:
                  return <SquareElements.EmptySquare key={key} />;
              }
            })}
          </Row>
        ))}
    </Container>
  );
};

export default BoardElement;
