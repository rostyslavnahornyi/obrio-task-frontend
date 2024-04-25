"use client";

import classNames from "classnames";
import { FC } from "react";
import { useQuizStore } from "@/store";
import styles from "./button.module.scss";
import { ButtonProps } from "./button.types";
import { Typography } from "../typography";

const Button: FC<ButtonProps> = ({
  selected = false,
  disabled,
  children,
  ...props
}) => {
  const { mode } = useQuizStore();

  return (
    <button
      className={classNames(
        styles.button,
        selected && styles.selected,
        disabled && styles.disabled,
        styles[`mode-${mode}`]
      )}
      type="button"
      {...props}
    >
      <Typography size="sm" mode="light">
        {children}
      </Typography>
    </button>
  );
};

export { Button };
