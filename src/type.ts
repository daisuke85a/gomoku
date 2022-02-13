export type Player = "X" | "O";
export type SquareIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Game {
  squares: (undefined | string)[];
  nextPlayer: Player;
  winner: Player | undefined;
}
