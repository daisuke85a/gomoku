import { selectSquareAtom } from "@/atom";
import { Button } from "@/components/Button";
import { SquareIndex } from "@/type";
import { useAtom } from "jotai";
import { VFC } from "react";

type Props = {
  squreIndex: SquareIndex;
};

export const Square: VFC<Props> = ({ squreIndex }) => {
  const [selectSquare, setSelectSquare] = useAtom(selectSquareAtom);

  return (
    <Button
      onClick={() => setSelectSquare(squreIndex)}
      style={{ width: "5rem", height: "5rem", fontSize: "3rem" }}
    >
      {selectSquare[squreIndex]}
    </Button>
  );
};
