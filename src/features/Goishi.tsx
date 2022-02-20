import { Player } from "@/type";
import { Icon, IconProps } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  type: Player;
};

export const Goishi: VFC<Props> = ({ type }) => {
  return <CircleIcon color={type === "white" ? "white" : "black"} />;
};

const CircleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);
