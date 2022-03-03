import { Box } from "@chakra-ui/react";
import { VFC } from "react";

export const GameBackground: VFC = () => {
  return (
    <>
      <Box
        clipPath="polygon(0 0, 100% 0%, 100% 60%, 0% 100%)"
        backgroundColor="blackAlpha.900"
        h="55%"
      />
      <Box h="45%" />
    </>
  );
};
