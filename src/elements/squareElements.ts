import styled from "styled-components/macro";

const SquareBase = styled.div`
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
  border-radius: 0.2rem;
`;

const squareElements = {
  WhiteSquare: styled(SquareBase)`
    background-color: #faf7f5;
    color: black;
    font-size: 1.5rem;
    position: relative;
  `,
  YellowSquare: styled(SquareBase)`
    background-color: #e5b91d;
  `,
  RedSquare: styled(SquareBase)`
    background-color: #e73a2f;
  `,
  BeigeSquare: styled(SquareBase)`
    background-color: #b1a87a;
  `,
  GreySquare: styled(SquareBase)`
    background-color: #b0b0b0;
  `,
  EmptySquare: styled(SquareBase)`
    background-color: #e4dac3;
  `,
  LetterMultiplier: styled.div`
    position: absolute;
    font-weight: 400;
    font-size: 0.75rem;
    bottom: 0;
    right: 0;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  `,
};

export default squareElements;
