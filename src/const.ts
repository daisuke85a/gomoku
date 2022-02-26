export const gameModeConfig = {
  sanmoku: {
    rows: 3,
    columns: 3,
    chainToWin: 3,
  },
  gomoku: {
    rows: 15,
    columns: 15,
    chainToWin: 5,
  },
} as const;

export const absoluteCenter = {
  position: "absolute",
  margin: "auto",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;
