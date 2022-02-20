import {
  columnIndexArray,
  columnIndexMax,
  numberOfVictoriousGoishi,
  rowIndexArray,
  rowIndexMax,
} from "./const";
import { Coordinate, Player, SquareState } from "./type";

export const checkWinner = (squares: SquareState[][]): undefined | Player => {
  for (const row of rowIndexArray) {
    for (const column of columnIndexArray) {
      const coordinate: Coordinate = { row, column };
      const winnerCheckSquare = squares[row]?.[column];
      if (winnerCheckSquare === undefined) {
        continue;
      }
      if (
        chainHorizontally(squares, coordinate) ||
        chainVertically(squares, coordinate) ||
        chainDiagonallyRight(squares, coordinate) ||
        chainDiagonallyLeft(squares, coordinate)
      ) {
        return winnerCheckSquare;
      }
    }
  }

  return undefined;
};

const chainHorizontally = (
  squares: SquareState[][],
  coordinate: Coordinate
): boolean => {
  if (coordinate.row + numberOfVictoriousGoishi - 1 > rowIndexMax) {
    return false;
  }

  return [...Array(numberOfVictoriousGoishi - 1)]
    .map((_, i) => i + 1)
    .every(
      (j) =>
        squares[coordinate.row]?.[coordinate.column] ===
        squares[coordinate.row]?.[coordinate.column + j]
    );
};

const chainVertically = (
  squares: SquareState[][],
  coordinate: Coordinate
): boolean => {
  if (coordinate.row + numberOfVictoriousGoishi - 1 > rowIndexMax) {
    return false;
  }
  return [...Array(numberOfVictoriousGoishi - 1)]
    .map((_, i) => i + 1)
    .every(
      (j) =>
        squares[coordinate.row]?.[coordinate.column] ===
        squares[coordinate.row + j]?.[coordinate.column]
    );
};

const chainDiagonallyRight = (
  squares: SquareState[][],
  coordinate: Coordinate
): boolean => {
  if (
    coordinate.row + numberOfVictoriousGoishi - 1 > rowIndexMax ||
    coordinate.column + numberOfVictoriousGoishi - 1 > columnIndexMax
  ) {
    return false;
  }

  return [...Array(numberOfVictoriousGoishi - 1)]
    .map((_, i) => i + 1)
    .every(
      (j) =>
        squares[coordinate.row]?.[coordinate.column] ===
        squares[coordinate.row + j]?.[coordinate.column + j]
    );
};

const chainDiagonallyLeft = (
  squares: SquareState[][],
  coordinate: Coordinate
): boolean => {
  if (
    coordinate.row + (numberOfVictoriousGoishi - 1) > rowIndexMax ||
    coordinate.column - (numberOfVictoriousGoishi - 1) < 0
  ) {
    return false;
  }

  return [...Array(numberOfVictoriousGoishi - 1)]
    .map((_, i) => i + 1)
    .every(
      (j) =>
        squares[coordinate.row]?.[coordinate.column] ===
        squares[coordinate.row + j]?.[coordinate.column - j]
    );
};
