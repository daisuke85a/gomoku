import { getGameModeAtom, selectSquareAtom } from "@/atom";
import { absoluteCenter, gameModeConfig } from "@/const";
import { arrayColumnIndex, arrayRowIndex } from "@/game";
import { GameMode } from "@/type";
import { Box, Flex, Image } from "@chakra-ui/react";
import { LayoutProps } from "@chakra-ui/styled-system/src/config/layout";
import { useAtom, useAtomValue } from "jotai";
import { VFC } from "react";
import { Square } from "./Square";

type Props = {
  gameMode: GameMode;
};

export const Board: VFC<Props> = () => {
  const [selectSquare, setSelectSquare] = useAtom(selectSquareAtom);
  const gameMode = useAtomValue(getGameModeAtom);

  if (gameMode === undefined) {
    return null;
  }

  return (
    <>
      <Box w={boardSize} h={boardSize} position="relative">
        <Image
          src="/images/goban.jpg"
          objectFit="fill"
          height="100%"
          width="100%"
          alt="board background"
          {...absoluteCenter}
        />
        <Box {...absoluteCenter}>
          {arrayRowIndex(gameMode).map((row) => {
            return (
              <Flex
                key={row}
                h={`calc(100% / ${gameModeConfig[gameMode].rows})`}
              >
                {arrayColumnIndex(gameMode).map((column) => (
                  <Square
                    key={column}
                    onSelect={() => void setSelectSquare({ row, column })}
                    state={selectSquare[row]?.[column]}
                  />
                ))}
              </Flex>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

const boardSize: LayoutProps["w"] & LayoutProps["h"] = [
  "90vw",
  "70vw",
  "60vw",
  "50vw",
  "40vw",
];
