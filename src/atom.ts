import { atom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import {
  columnIndexArray,
  columnIndexMax,
  rowIndexArray,
  rowIndexMax,
} from "./const";
import { Coordinate, Game, Player, SquareState, Winner } from "./type";

const gameInitialState: Game = {
  squares: Array<SquareState[]>(rowIndexMax + 1).fill(
    Array<SquareState>(columnIndexMax + 1).fill(undefined)
  ),
  nextPlayer: "black",
};

const gameAtom = atomWithImmer<Game>(gameInitialState);

export const resetGameAtom = atom(null, (_get, set) =>
  set(gameAtom, gameInitialState)
);

export const winnerAtom = atom<Winner>((get) => {
  const squares = get(gameAtom).squares;
  for (const row of rowIndexArray) {
    for (const column of columnIndexArray) {
      if (squares[row]?.[column] === undefined) {
        continue;
      }

      if (row + 2 <= rowIndexMax) {
        if (
          squares[row]?.[column] === squares[row + 1]?.[column] &&
          squares[row]?.[column] === squares[row + 2]?.[column]
        ) {
          return squares[row]?.[column];
        }
      }

      if (column + 2 <= columnIndexMax) {
        if (
          squares[row]?.[column] === squares[row]?.[column + 1] &&
          squares[row]?.[column] === squares[row]?.[column + 2]
        ) {
          return squares[row]?.[column];
        }
      }

      if (row + 2 <= rowIndexMax && column + 2 <= columnIndexMax) {
        if (
          squares[row]?.[column] === squares[row + 1]?.[column + 1] &&
          squares[row]?.[column] === squares[row + 2]?.[column + 2]
        ) {
          return squares[row]?.[column];
        }
      }

      if (row - 2 >= 0 && column - 2 >= 0) {
        if (
          squares[row]?.[column] === squares[row - 1]?.[column - 1] &&
          squares[row]?.[column] === squares[row - 2]?.[column - 2]
        ) {
          return squares[row]?.[column];
        }
      }
    }
  }
  return undefined;
});

export const selectSquareAtom = atom(
  (get) => get(gameAtom).squares,
  (get, set, coordinate: Coordinate) => {
    if (
      get(winnerAtom) !== undefined ||
      get(gameAtom).squares[coordinate.row]?.[coordinate.column] !== undefined
    )
      return;

    set(gameAtom, (game) => {
      const row = game.squares[coordinate.row];
      if (row === undefined) {
        throw new Error("game.squares[coordinate.row] is undefined");
      }
      row[coordinate.column] = game.nextPlayer;
      game.nextPlayer = game.nextPlayer === "black" ? "white" : "black";
    });
  }
);

export const nextPlayerAtom = atom<Player>((get) => get(gameAtom).nextPlayer);
