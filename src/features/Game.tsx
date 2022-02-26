import { setGameModeAtom } from "@/atom";
import { GameMode } from "@/type";
import { useBoolean } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, VFC } from "react";
import { Board } from "./Board";

type Props = {
  gameMode: GameMode;
};
export const Game: VFC<Props> = ({ gameMode: gameModeProp }) => {
  const [gameMode, setGameMode] = useAtom(setGameModeAtom);
  const [doneSetGameMode, setDoneSetGmaeMode] = useBoolean(false);

  useEffect(() => {
    setGameMode(gameModeProp);
    setDoneSetGmaeMode.on();
  }, [gameModeProp, setGameMode, setDoneSetGmaeMode]);

  if (gameMode === undefined || !doneSetGameMode) {
    return null;
  }

  return <Board gameMode={gameMode} />;
};
