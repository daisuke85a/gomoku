export type Player = "X" | "O";
export type SquareIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Square = undefined | Player;

export interface Game {
  squares: Square[];
  nextPlayer: Player;
}

export type Winner = undefined | Player;
