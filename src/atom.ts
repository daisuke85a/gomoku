import { atom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import { gameInitialState } from "./const";
import { checkWinner } from "./game";
import { Coordinate, Game, Player, Winner } from "./type";

const gameAtom = atomWithImmer<Game>(gameInitialState);

export const resetGameAtom = atom(null, (_get, set) =>
  set(gameAtom, gameInitialState)
);

export const winnerAtom = atom<Winner>((get) => {
  return checkWinner(get(gameAtom).squares);
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
