export type GameMode = "sanmoku" | "gomoku";

export type Player = "white" | "black";

export type SquareState = undefined | Player;

export interface Game {
  squares: SquareState[][];
  nextPlayer: Player;
}

export type Winner = undefined | Player;

export type Coordinate = {
  row: number;
  column: number;
};
