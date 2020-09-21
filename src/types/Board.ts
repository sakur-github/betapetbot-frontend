import Square from "./Square";
import PlayerState from "./PlayerState";

type Board = {
  squares: Square[][];
  playerState: PlayerState;
  opponentState: PlayerState;
};

export default Board;
