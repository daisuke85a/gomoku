import { getGameModeAtom, setGameModeAtom } from "@/atom";
import { Board } from "@/features/Board";
import { Button, Container, Stack } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const gameMode = useAtomValue(getGameModeAtom);
  const setGameMode = useUpdateAtom(setGameModeAtom);

  if (gameMode === undefined) {
    return (
      <Container>
        <Stack my={5}>
          <Button onClick={() => setGameMode("sanmoku")}>三目並べ</Button>
          <Button onClick={() => setGameMode("gomoku")}>五目並べ</Button>
        </Stack>
      </Container>
    );
  }

  return <Board />;
};

export default Home;
