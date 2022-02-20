export type Player = "white" | "black";
export type SquareIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type SquareState = undefined | Player;
export interface Game {
  squares: SquareState[];
  nextPlayer: Player;
}

export type Winner = undefined | Player;
