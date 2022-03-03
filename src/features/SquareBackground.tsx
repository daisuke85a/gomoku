import { Box, SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { VFC } from "react";

const SquareBackgroundDefaultStyle = {
  borderColor: "black",
  height: "100%",
};

export const SquareBackground: VFC<SimpleGridProps> = (props) => {
  return (
    <SimpleGrid columns={2} width="100%" height="100%" {...props}>
      <Box
        borderRight="1px"
        borderBottom="1px"
        {...SquareBackgroundDefaultStyle}
      />
      <Box
        borderLeft="1px"
        borderBottom="1px"
        {...SquareBackgroundDefaultStyle}
      />
      <Box
        borderRight="1px"
        borderTop="1px"
        {...SquareBackgroundDefaultStyle}
      />
      <Box borderLeft="1px" borderTop="1px" {...SquareBackgroundDefaultStyle} />
    </SimpleGrid>
  );
};
