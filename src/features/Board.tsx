import { SquareIndex } from "@/type";
import { Square } from "./Square";
import { Status } from "./Status";

export const Board = () => {
  return (
    <div>
      <Status />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "5rem 5rem 5rem",
          gridTemplateRows: "5rem 5rem 5rem",
          gridGap: "0.5rem",
        }}
      >
        {([0, 1, 2, 3, 4, 5, 6, 7, 8] as SquareIndex[]).map(
          (field: SquareIndex) => (
            <Square key={field} squreIndex={field} />
          )
        )}
      </div>
    </div>
  );
};
