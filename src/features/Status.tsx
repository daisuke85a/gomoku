import { nextPlayerAtom } from "@/atom";
import { useAtomValue } from "jotai/utils";
import { VFC } from "react";

export const Status: VFC = () => {
  const nextPlayer = useAtomValue(nextPlayerAtom);
  const status = `Next player: ${nextPlayer}`;

  return <div>{status}</div>;
};
