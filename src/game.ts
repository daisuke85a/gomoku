import { gameModeConfig } from "./const";
import { Coordinate, Game, GameMode, Player, SquareState } from "./type";

export const checkWinner = (
  squares: SquareState[][],
  gameMode: GameMode
): undefined | Player => {
  for (const row of [...Array(gameModeConfig[gameMode].rows - 1)].map(
    (_, i) => i
  )) {
    for (const column of [...Array(gameModeConfig[gameMode].columns - 1)].map(
      (_, i) => i
    )) {
      const coordinate: Coordinate = { row, column };
      const winnerCheckSquare = squares[row]?.[column];
      if (winnerCheckSquare === undefined) {
        continue;
      }
      if (
        chainHorizontally(squares, coordinate, gameMode) ||
        chainVertically(squares, coordinate, gameMode) ||
        chainDiagonallyRight(squares, coordinate, gameMode) ||
        chainDiagonallyLeft(squares, coordinate, gameMode)
      ) {
        return winnerCheckSquare;
      }
    }
  }

  return undefined;
};

export const gameInitialState = (gameMode: GameMode): Game => {
  return {
    squares: Array<SquareState[]>(gameModeConfig[gameMode].rows).fill(
      Array<SquareState>(gameModeConfig[gameMode].columns).fill(undefined)
    ),
    nextPlayer: "black",
  };
};

export const arrayColumnIndex = (gameMode: GameMode): number[] =>
  [...Array(gameModeConfig[gameMode].columns)].map((_, i) => i);

export const arrayRowIndex = (gameMode: GameMode): number[] =>
  [...Array(gameModeConfig[gameMode].rows)].map((_, i) => i);

const chainHorizontally = (
  squares: SquareState[][],
  coordinate: Coordinate,
  gameMode: GameMode
): boolean => {
  if (
    coordinate.column + gameModeConfig[gameMode].chainToWin >
    gameModeConfig[gameMode].columns
  ) {
    return false;
  }

  return checkIndexArray(gameMode).every(
    (j) =>
      squares[coordinate.row]?.[coordinate.column] ===
      squares[coordinate.row]?.[coordinate.column + j]
  );
};

const chainVertically = (
  squares: SquareState[][],
  coordinate: Coordinate,
  gameMode: GameMode
): boolean => {
  if (
    coordinate.row + gameModeConfig[gameMode].chainToWin >
    gameModeConfig[gameMode].rows
  ) {
    return false;
  }
  return checkIndexArray(gameMode).every(
    (j) =>
      squares[coordinate.row]?.[coordinate.column] ===
      squares[coordinate.row + j]?.[coordinate.column]
  );
};

const chainDiagonallyRight = (
  squares: SquareState[][],
  coordinate: Coordinate,
  gameMode: GameMode
): boolean => {
  if (
    coordinate.row + gameModeConfig[gameMode].chainToWin >
      gameModeConfig[gameMode].rows ||
    coordinate.column + gameModeConfig[gameMode].chainToWin >
      gameModeConfig[gameMode].rows
  ) {
    return false;
  }

  return checkIndexArray(gameMode).every(
    (j) =>
      squares[coordinate.row]?.[coordinate.column] ===
      squares[coordinate.row + j]?.[coordinate.column + j]
  );
};

const chainDiagonallyLeft = (
  squares: SquareState[][],
  coordinate: Coordinate,
  gameMode: GameMode
): boolean => {
  if (
    coordinate.row + gameModeConfig[gameMode].chainToWin >
      gameModeConfig[gameMode].rows ||
    coordinate.column - (gameModeConfig[gameMode].chainToWin - 1) < 0
  ) {
    return false;
  }

  return checkIndexArray(gameMode).every(
    (j) =>
      squares[coordinate.row]?.[coordinate.column] ===
      squares[coordinate.row + j]?.[coordinate.column - j]
  );
};

const checkIndexArray = (gameMode: GameMode) =>
  [...Array(gameModeConfig[gameMode].chainToWin - 1)].map((_, i) => i + 1);
