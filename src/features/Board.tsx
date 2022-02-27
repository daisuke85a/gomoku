import { getGameModeAtom, selectSquareAtom } from "@/atom";
import { gameModeConfig } from "@/const";
import { arrayColumnIndex, arrayRowIndex } from "@/game";
import { Box, Container, ContainerProps, Flex } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { VFC } from "react";
import { Square } from "./Square";

export const Board: VFC<ContainerProps> = ({ ...rest }) => {
  const [selectSquare, setSelectSquare] = useAtom(selectSquareAtom);
  const gameMode = useAtomValue(getGameModeAtom);

  if (gameMode === undefined) {
    return null;
  }

  return (
    <Container centerContent {...rest}>
      <Box w="50vw" h="50vw">
        {arrayRowIndex(gameMode).map((row) => {
          return (
            <Flex key={row} h={`calc(100% / ${gameModeConfig[gameMode].rows})`}>
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
    </Container>
  );
};
