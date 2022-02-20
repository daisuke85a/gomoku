import { getLastItem } from "./module";
import { Game, SquareState } from "./type";

export const rowIndexArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
] as const;
export const columnIndexArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
] as const;

export const rowIndexMax: number = getLastItem(rowIndexArray);
export const columnIndexMax: number = getLastItem(columnIndexArray);

export const gameInitialState: Game = {
  squares: Array<SquareState[]>(rowIndexMax + 1).fill(
    Array<SquareState>(columnIndexMax + 1).fill(undefined)
  ),
  nextPlayer: "black",
} as const;
