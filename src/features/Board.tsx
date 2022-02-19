import { SquareIndex } from "@/type";
import { SimpleGrid } from "@chakra-ui/react";
import { Square } from "./Square";
import { Status } from "./Status";

export const Board = () => {
  return (
    <div>
      <Status />
      <SimpleGrid
        gap={"0.5rem 0.5rem"}
        templateColumns={"5rem 5rem 5rem"}
        templateRows={"5rem 5rem 5rem"}
      >
        {([0, 1, 2, 3, 4, 5, 6, 7, 8] as SquareIndex[]).map(
          (field: SquareIndex) => (
            <Square key={field} squreIndex={field} />
          )
        )}
      </SimpleGrid>
    </div>
  );
};
