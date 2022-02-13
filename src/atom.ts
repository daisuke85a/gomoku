import { atom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import { numberOfSquare } from "./const";
import { Game, Player, SquareIndex } from "./type";

const gameInitialState: Game = {
  squares: Array(numberOfSquare).fill(undefined),
  nextPlayer: "X",
  winner: undefined,
};

const gameAtom = atomWithImmer<Game>(gameInitialState);

export const resetGameAtom = atom(null, (_get, set) =>
  set(gameAtom, gameInitialState)
);

export const selectSquareAtom = atom(
  (get) => get(gameAtom).squares,
  (get, set, squareIndex: SquareIndex) => {
    if (
      get(gameAtom).winner !== undefined ||
      get(gameAtom).squares[squareIndex] !== undefined
    )
      return;

    set(gameAtom, (game) => {
      game.squares[squareIndex] = game.nextPlayer;
      game.nextPlayer = game.nextPlayer === "X" ? "O" : "X";
    });
  }
);

export const nextPlayerAtom = atom<Player>((get) => get(gameAtom).nextPlayer);
