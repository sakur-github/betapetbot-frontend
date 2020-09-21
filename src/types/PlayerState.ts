import Letter from "./Letter";

type PlayerState = {
  userId: number;
  hand?: Letter[];
  score: number;
  handCount: number;
};

export default PlayerState;
