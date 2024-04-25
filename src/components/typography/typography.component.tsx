"use client";

import classNames from "classnames";
import { FC } from "react";
import { useQuizStore } from "@/store";
import styles from "./typography.module.scss";
import { TypographyProps } from "./typography.types";

const Typography: FC<TypographyProps> = ({
  mode: mainMode,
  size = "l",
  className,
  children,
}) => {
  const { mode } = useQuizStore();

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
