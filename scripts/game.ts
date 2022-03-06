#!/usr/bin/env ts-node

export type PieceState = 0 | 1;

type CreateStateProps = {
  pieces?: PieceState[];
  enemyPieces?: PieceState[];
};

type State = {
  pieces: PieceState[];
  enemyPieces: PieceState[];
};

export const countPiece = (pieces: PieceState[]): number =>
  pieces.filter((item) => item === 1).length;

export const isLose = (state: State) => {
  const isComp = (x: number, y: number, dx: number, dy: number): boolean => {
    for (let i = 0; i < 3; i++) {
      if (
        y < 0 ||
        2 < y ||
        x < 0 ||
        2 < x ||
        state.enemyPieces[x + y * 3] === 0
      )
        return false;
      [x, y] = [x + dx, y + dy];
    }
    return true;
  };

  // 負けかどうかの斜めのチェック
  if (isComp(0, 0, 1, 1) || isComp(0, 2, 1, -1)) return true;

  //   縦か横揃いのチェック(for文を増やさないよう工夫してる)
  for (const i of [...Array(3)].map((_, i) => i)) {
    if (isComp(0, i, 1, 0) || isComp(i, 0, 0, 1)) return true;
  }
  return false;
};

export const isDraw = (state: State) => {
  return countPiece(state.pieces) + countPiece(state.enemyPieces) === 9;
};

export const isDone = (state: State) => isLose(state) || isDraw(state);

export const next = (state: State, action: number): State => {
  const pieces = [...state.pieces];
  pieces[action] = 1;
  return createState({ pieces: state.enemyPieces, enemyPieces: pieces });
};

export const legalActions = (state: State): number[] => {
  const actions: number[] = [];
  for (const action of [...Array(9)].map((_, i) => i)) {
    if (state.pieces[action] === 0 && state.enemyPieces[action] === 0) {
      actions.push(action);
    }
  }
  return actions;
};

export const isFirstPlayer = (state: State) =>
  countPiece(state.pieces) === countPiece(state.enemyPieces);

export const createState = (props?: CreateStateProps): State => {
  return {
    pieces: props?.pieces ?? [...Array(9).fill(0)],
    enemyPieces: props?.enemyPieces ?? [...Array(9).fill(0)],
  };
};

export const toString = (state: State): string => {
  const players = isFirstPlayer(state) ? ["o", "x"] : ["x", "o"];
  let string = "";

  for (const i of [...Array(9)].map((_, i) => i)) {
    if (state.pieces[i] === 1) {
      string += players[0];
    } else if (state.enemyPieces[i] === 1) {
      string += players[1];
    } else {
      string += "-";
    }
    if (i % 3 === 2) {
      string += "\n";
    }
  }

  return string;
};

export const randomAction = (state: State): number => {
  const actions = legalActions(state);
  const nextAction = actions[getRandomInt(actions.length - 1)];
  // Rustなら配列が固定長で保証できるのでこんな処理いらない
  if (nextAction === undefined) {
    throw new Error("nextAction is undefined");
  }
  return nextAction;
};

export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

console.log("Game Start!");

let state = createState();

while (1) {
  if (isDone(state)) {
    console.log("Done!");
    break;
  }
  let action: number;

  if (isFirstPlayer(state)) {
    action = randomAction(state);
  } else {
    action = randomAction(state);
  }

  state = next(state, action);

  console.log("next");
  console.log(toString(state));
}
