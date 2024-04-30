"use client";

import { useAppStore } from "@/store";
import classNames from "classnames";
import { FC } from "react";
import { Typography } from "../typography";
import styles from "./button.module.scss";
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = ({
  selected = false,
  disabled,
  children,
  ...props
}) => {
  const { mode } = useAppStore();

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
