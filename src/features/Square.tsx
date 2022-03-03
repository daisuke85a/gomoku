import { absoluteCenter } from "@/const";
import { SquareState } from "@/type";
import { Box } from "@chakra-ui/react";
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
      <Box
        w="100%"
        onClick={() => onSelect()}
        fontSize="2rem"
        position="relative"
      >
        <SquareBackground {...absoluteCenter} />
        {state !== undefined && <Goishi type={state} {...absoluteCenter} />}
      </Box>
    );
  },
  (prevProps, nextProps) => prevProps.state === nextProps.state
);
