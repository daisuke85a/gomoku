import { setGameModeAtom } from "@/atom";
import { headerHeight } from "@/components/Header";
import { absoluteCenter } from "@/const";
import { GameMode } from "@/type";
import { Box, Flex, useBoolean, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, VFC } from "react";
import { Board } from "./Board";
import { GameBackground } from "./GameBackground";

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

  return (
    <VStack position="relative" h={`calc(100vh - ${headerHeight})`}>
      <Box {...absoluteCenter}>
        <GameBackground />
      </Box>
      <Flex {...absoluteCenter} alignItems="center" justifyContent="center">
        <Board gameMode={gameMode} />
      </Flex>
    </VStack>
  );
};
