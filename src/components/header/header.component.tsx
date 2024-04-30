"use client";

import { ReactComponent as BlackBackIcon } from "@/assets/icons/left-chevron-black.svg";
import { ReactComponent as WhiteBackIcon } from "@/assets/icons/left-chevron-white.svg";
import { ReactComponent as BlackLogoIcon } from "@/assets/icons/logo-black.svg";
import { ReactComponent as WhiteLogoIcon } from "@/assets/icons/logo-white.svg";
import { ReactComponent as ModeIcon } from "@/assets/icons/mode.svg";

import { useAppStore, useQuizStore } from "@/store";
import { FC } from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";

const Header: FC = () => {
  const { steps, changeStep } = useQuizStore();
  const { mode, toggleMode } = useAppStore();

  const router = useRouter();

  const onBackClickHandler = () => {
    if (steps?.prevId) {
      changeStep(steps?.prevId);
      router.push(steps.prevId);
    }
  };

  /**
   * TODO: discuss with designers these svgs because
   * changing "fill" css-prop doesnt help to change color.
   * Then REFACTOR.
   */
  return (
    <header className={styles.header}>
      {mode === "dark" ? (
        <>
          <WhiteBackIcon onClick={onBackClickHandler} />
          <WhiteLogoIcon />
        </>
      ) : (
        <>
          <BlackBackIcon onClick={onBackClickHandler} />
          <BlackLogoIcon />
        </>
      )}

      <ModeIcon className={styles[`mode-${mode}`]} onClick={toggleMode} />
    </header>
  );
};

export { Header };
