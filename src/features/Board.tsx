import { getGameModeAtom, selectSquareAtom } from "@/atom";
import { arrayColumnIndex, arrayRowIndex } from "@/game";
import { GameMode } from "@/type";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { VFC } from "react";
import { Square } from "./Square";
import { Status } from "./Status";

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
    <Container centerContent>
      <Status my={2} />
      <SimpleGrid
        templateColumns={arrayRowIndex(gameMode).reduce<string>(
          (pre) => pre + "1fr ",
          ""
        )}
        templateRows={arrayRowIndex(gameMode).reduce<string>(
          (pre) => pre + "1fr ",
          ""
        )}
      >
        {arrayRowIndex(gameMode).map((row) =>
          arrayColumnIndex(gameMode).map((column) => (
            <Square
              key={`row=${row.toString()},column=${column.toString()}`}
              onSelect={() => void setSelectSquare({ row, column })}
              state={selectSquare[row]?.[column]}
            />
          ))
        )}
      </SimpleGrid>
    </Container>
  );
};
