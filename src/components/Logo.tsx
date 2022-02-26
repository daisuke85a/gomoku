import { pagesPath } from "@/lib/$path";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { VFC } from "react";

export const Logo: VFC = () => {
  return (
    <>
      <Text
        color="gray.400"
        fontFamily={`'Bungee', cursive`}
        px="2"
        fontSize="3xl"
      >
        <Link href={pagesPath.$url()}>GOMOKU</Link>
      </Text>
    </>
  );
};
