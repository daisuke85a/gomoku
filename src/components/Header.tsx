import { Logo } from "@/components/Logo";
import { Box } from "@chakra-ui/react";
import { VFC } from "react";

export const Header: VFC = () => {
  return (
    <Box backgroundColor={"blackAlpha.900"}>
      <Logo />
    </Box>
  );
};
