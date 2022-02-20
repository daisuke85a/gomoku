import { columnIndexArray, rowIndexArray } from "./const";

export type Player = "white" | "black";
export type SquareState = undefined | Player;
export interface Game {
  squares: SquareState[][];
  nextPlayer: Player;
}

export type Winner = undefined | Player;

export type RowIndex = typeof rowIndexArray[number];
export type ColumnIndex = typeof columnIndexArray[number];
export type Coordinate = {
  row: RowIndex;
  column: ColumnIndex;
};
