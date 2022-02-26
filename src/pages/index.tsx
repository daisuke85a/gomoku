import { setGameModeAtom } from "@/atom";
import { pagesPath } from "@/lib/$path";
import { Button, Container, Stack } from "@chakra-ui/react";
import { useUpdateAtom } from "jotai/utils";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const setGameMode = useUpdateAtom(setGameModeAtom);

  return (
    <Container>
      <Stack my={5}>
        <Link href={pagesPath.sanmoku.$url()} passHref>
          {/* TODO: 直接三目並べのページを開いたときに三目並べできない問題対応する */}
          <Button as="a" onClick={() => setGameMode("sanmoku")}>
            三目並べ
          </Button>
        </Link>
        <Link href={pagesPath.gomoku.$url()} passHref>
          <Button as="a" onClick={() => setGameMode("gomoku")}>
            五目並べ
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default Home;
