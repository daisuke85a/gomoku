import { selectSquareAtom } from "@/atom";
import { columnIndexArray, rowIndexArray } from "@/const";
import { ColumnIndex, RowIndex } from "@/type";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { Square } from "./Square";
import { Status } from "./Status";

export const Board = () => {
  const [selectSquare, setSelectSquare] = useAtom(selectSquareAtom);

  return (
    <Container centerContent>
      <Status my={2} />
      <SimpleGrid
        templateColumns={columnIndexArray.reduce<string>(
          (pre) => pre + "1fr ",
          ""
        )}
        templateRows={columnIndexArray.reduce<string>(
          (pre) => pre + "1fr ",
          ""
        )}
      >
        {rowIndexArray.map((row: RowIndex) =>
          columnIndexArray.map((column: ColumnIndex) => (
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
