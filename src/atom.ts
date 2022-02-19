import { atom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import { numberOfSquare } from "./const";
import { Game, Player, Square, SquareIndex, Winner } from "./type";

const gameInitialState: Game = {
  squares: Array<Square>(numberOfSquare).fill(undefined),
  nextPlayer: "X",
};

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

const gameAtom = atomWithImmer<Game>(gameInitialState);

export const resetGameAtom = atom(null, (_get, set) =>
  set(gameAtom, gameInitialState)
);

export const winnerAtom = atom<Winner>((get) => {
  for (const line of lines) {
    const [a, b, c] = line;
    if (
      get(gameAtom).squares[a] !== undefined &&
      get(gameAtom).squares[a] === get(gameAtom).squares[b] &&
      get(gameAtom).squares[a] === get(gameAtom).squares[c]
    ) {
      return get(gameAtom).squares[a];
    }
  }
  return undefined;
});

export const selectSquareAtom = atom(
  (get) => get(gameAtom).squares,
  (get, set, squareIndex: SquareIndex) => {
    if (
      get(winnerAtom) !== undefined ||
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
