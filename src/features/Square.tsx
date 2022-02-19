import { selectSquareAtom } from "@/atom";
import { Button } from "@/components/Button";
import { Player, Square as SquareValue, SquareIndex } from "@/type";
import { useAtom } from "jotai";
import { memo, VFC } from "react";

type Props = {
  value: SquareValue;
  onSelect: () => void;
};

export const Square = memo<Props>(
  function SquareComponentFunction({ value, onSelect }) {
    return (
      <Button
        onClick={() => onSelect()}
        width="5rem"
        height="5rem"
        fontSize="3rem"
      >
        {value ?? ""}
      </Button>
    );
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value
);
