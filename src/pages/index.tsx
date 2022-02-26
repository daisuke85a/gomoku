import { pagesPath } from "@/lib/$path";
import { Button, Container, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack my={5}>
        <Link href={pagesPath.sanmoku.$url()} passHref>
          <Button as="a">三目並べ</Button>
        </Link>
        <Link href={pagesPath.gomoku.$url()} passHref>
          <Button as="a">五目並べ</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default Home;
