import { Button } from "@/components/Button";
import { SquareState } from "@/type";
import { memo } from "react";
import { Goishi } from "./Goishi";
import { SquareBackground } from "./SquareBackground";

type Props = {
  state: SquareState;
  onSelect: () => void;
};

export const Square = memo<Props>(
  function SquareComponentFunction({ state, onSelect }) {
    return (
      <Button onClick={() => onSelect()} fontSize="2rem" position="relative">
        <SquareBackground position="absolute" />
        {state !== undefined && <Goishi type={state} position="absolute" />}
      </Button>
    );
  },
  (prevProps, nextProps) => prevProps.state === nextProps.state
);
