import { setGameModeAtom } from "@/atom";
import { absoluteCenter } from "@/const";
import { GameMode } from "@/type";
import { Box, Flex, useBoolean, VStack } from "@chakra-ui/react";
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

  return (
    <VStack position="relative">
      <Box {...absoluteCenter}>
        <Box
          clipPath="polygon(0 0, 100% 0%, 100% 60%, 0% 100%)"
          backgroundColor="blackAlpha.900"
          h={`50vh`}
        />
        <Box h="50vh" />
      </Box>
      <Flex
        {...absoluteCenter}
        h="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Board />
      </Flex>
    </VStack>
  );
};
