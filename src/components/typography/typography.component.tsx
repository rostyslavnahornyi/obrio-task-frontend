"use client";

import { useAppStore } from "@/store";
import classNames from "classnames";
import { FC } from "react";
import styles from "./typography.module.scss";
import { TypographyProps } from "./typography.types";

const Typography: FC<TypographyProps> = ({
  mode: mainMode,
  size = "l",
  className,
  children,
}) => {
  const { mode } = useAppStore();

  return (
    <p
      className={classNames(
        styles[`size-${size}`],
        styles[`mode-${mainMode || mode}`],
        className
      )}
    >
      {children}
    </p>
  );
};

export { Typography };
