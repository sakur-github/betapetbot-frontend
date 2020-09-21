import Letter from "./Letter";

type Square = Letter & {
  letter?: string;
  multiplier: number;
  multiplyWord: boolean;
  type: number;
  x: number;
  y: number;
};

export default Square;
