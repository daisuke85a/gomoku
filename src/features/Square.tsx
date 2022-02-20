import { SquareState } from "@/type";
import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { Goishi } from "./Goishi";
import { SquareBackground } from "./SquareBackground";

type Props = {
  state: SquareState;
  onSelect: () => void;
};

const absoluteCenter = {
  position: "absolute",
  margin: "auto",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

export const Square = memo<Props>(
  function SquareComponentFunction({ state, onSelect }) {
    return (
      <Box
        as="button"
        width="3rem"
        height="3rem"
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
