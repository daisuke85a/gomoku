import { Button } from "@/components/Button";
import { SquareState } from "@/type";
import { memo } from "react";
import { Goishi } from "./Goishi";

type Props = {
  state: SquareState;
  onSelect: () => void;
};

export const Square = memo<Props>(
  function SquareComponentFunction({ state, onSelect }) {
    return (
      <Button
        onClick={() => onSelect()}
        width="5rem"
        height="5rem"
        fontSize="3rem"
      >
        {state !== undefined && <Goishi type={state} />}
      </Button>
    );
  },
  (prevProps, nextProps) => prevProps.state === nextProps.state
);
