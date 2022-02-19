import { Button } from "@/components/Button";
import { Square as SquareValue } from "@/type";
import { memo } from "react";

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
