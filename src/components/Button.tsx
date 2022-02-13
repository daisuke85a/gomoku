import { forwardRef, ReactNode } from "react";

type Props = { children?: ReactNode } & JSX.IntrinsicElements["button"];

export const Button = forwardRef<HTMLButtonElement, Props>(function button(
  { children, ...rest },
  ref
) {
  return (
    <button {...rest} ref={ref}>
      {children}
    </button>
  );
});
