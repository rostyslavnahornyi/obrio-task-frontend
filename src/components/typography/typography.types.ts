import { HTMLAttributes, PropsWithChildren } from "react";

interface TypographyProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLParagraphElement>, "className"> {
  mode?: "light" | "dark";
  size?: "sm" | "l";
  checkInterpolation?: boolean;
}

export type { TypographyProps };
