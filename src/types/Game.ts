import Board from "./Board";
import Player from "./Player";

type Game = {
  board: Board;
  player: Player;
  opponent: Player;
};

export default Game;
