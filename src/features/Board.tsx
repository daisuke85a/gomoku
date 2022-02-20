import { selectSquareAtom } from "@/atom";
import { SquareIndex } from "@/type";
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
        gap={"0.5rem 0.5rem"}
        templateColumns={"5rem 5rem 5rem"}
        templateRows={"5rem 5rem 5rem"}
      >
        {([0, 1, 2, 3, 4, 5, 6, 7, 8] as SquareIndex[]).map(
          (field: SquareIndex) => (
            <Square
              key={field}
              onSelect={() => void setSelectSquare(field)}
              state={selectSquare[field]}
            />
          )
        )}
      </SimpleGrid>
    </Container>
  );
};
