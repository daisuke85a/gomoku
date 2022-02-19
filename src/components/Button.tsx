import {
  Button as ChakuraButton,
  ButtonProps,
  forwardRef,
} from "@chakra-ui/react";

export const Button = forwardRef<ButtonProps, "button">(
  ({ children, ...rest }, ref) => (
    <ChakuraButton {...rest} ref={ref}>
      {children}
    </ChakuraButton>
  )
);
