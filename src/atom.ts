import { atom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import { checkWinner, gameInitialState } from "./game";
import { Coordinate, Game, GameMode, Player, Winner } from "./type";

const gameAtom = atomWithImmer<Game | undefined>(undefined);

const gameModeAtom = atom<GameMode | undefined>(undefined);

export const getGameModeAtom = atom((get) => get(gameModeAtom));

export const setGameModeAtom = atom(
  (get) => get(gameModeAtom),
  (_get, set, gameMode: GameMode) => {
    set(gameModeAtom, gameMode);
    set(gameAtom, gameInitialState(gameMode));
  }
);

export const winnerAtom = atom<Winner>((get) => {
  const gameMode = get(gameModeAtom);
  if (gameMode === undefined) {
    return undefined;
  }
  const game = get(gameAtom);
  if (game === undefined) {
    return undefined;
  }

  return checkWinner(game.squares, gameMode);
});

export const selectSquareAtom = atom(
  (get) => {
    const game = get(gameAtom);
    if (game === undefined) {
      return [];
    }
    return game.squares;
  },
  (get, set, coordinate: Coordinate) => {
    if (
      get(winnerAtom) !== undefined ||
      get(gameAtom)?.squares[coordinate.row]?.[coordinate.column] !== undefined
    )
      return;

    set(gameAtom, (game) => {
      if (game === undefined) {
        throw new Error("game is undefined");
      }
      const row = game.squares[coordinate.row];
      if (row === undefined) {
        throw new Error("game.squares[coordinate.row] is undefined");
      }
      row[coordinate.column] = game.nextPlayer;
      game.nextPlayer = game.nextPlayer === "black" ? "white" : "black";
    });
  }
);

export const nextPlayerAtom = atom<Player | undefined>((get) => {
  const game = get(gameAtom);
  if (game === undefined) {
    return undefined;
  }
  return game.nextPlayer;
});
