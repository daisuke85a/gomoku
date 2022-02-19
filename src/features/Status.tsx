import { nextPlayerAtom, winnerAtom } from "@/atom";
import { Box, BoxProps } from "@chakra-ui/react";
import { useAtomValue } from "jotai/utils";
import { useMemo, VFC } from "react";

export const Status: VFC<BoxProps> = (props) => {
  const nextPlayer = useAtomValue(nextPlayerAtom);
  const winner = useAtomValue(winnerAtom);
  const status = useMemo(
    () =>
      winner !== undefined
        ? `Winner is ${winner}`
        : `Next player: ${nextPlayer}`,
    [winner, nextPlayer]
  );

  return <Box {...props}>{status}</Box>;
};
