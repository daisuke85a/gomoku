import { nextPlayerAtom } from "@/atom";
import { Box, BoxProps } from "@chakra-ui/react";
import { useAtomValue } from "jotai/utils";
import { VFC } from "react";

export const Status: VFC<BoxProps> = (props) => {
  const nextPlayer = useAtomValue(nextPlayerAtom);
  const status = `Next player: ${nextPlayer}`;

  return <Box {...props}>{status}</Box>;
};
