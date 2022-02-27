import { Logo } from "@/components/Logo";
import { Box } from "@chakra-ui/react";
import { VFC } from "react";

export const headerHeight = "50px";

export const Header: VFC = () => {
  return (
    <Box backgroundColor={"blackAlpha.900"} h={headerHeight}>
      <Logo />
    </Box>
  );
};
