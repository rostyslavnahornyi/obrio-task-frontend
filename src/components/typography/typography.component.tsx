"use client";

import { QUIZ } from "@/quiz.config";
import { useAnswersStore, useAppStore } from "@/store";
import classNames from "classnames";
import { useParams } from "next/navigation";
import { FC, useCallback } from "react";
import styles from "./typography.module.scss";
import { TypographyProps } from "./typography.types";

const Typography: FC<TypographyProps> = ({
  mode: mainMode,
  size = "l",
  className,
  checkInterpolation = false,
  children,
}) => {
  const { mode } = useAppStore();
  const { answers } = useAnswersStore();
  const { id } = useParams<{ id: string }>();

  const interpolatedContent = useCallback(() => {
    if (typeof children !== "string") {
      return children;
    }

    let content = children;
    const question = QUIZ.find(({ id: questionId }) => questionId === id)!;

    question.vars?.forEach(({ placeholder, matchers, questionId }) => {
      const answerId = answers.find(
        (answerItem) => answerItem.questionId === questionId
      )?.selectedId;

      const replaceValue = matchers.find(({ key }) => key === answerId)?.value;
      content = content.replaceAll(placeholder, replaceValue ?? placeholder);
    });

    return content;
  }, [answers, children, id]);

  return (
    <p
      className={classNames(
        styles[`size-${size}`],
        styles[`mode-${mainMode || mode}`],
        className
      )}
    >
      {checkInterpolation ? interpolatedContent() : children}
    </p>
  );
};

export { Typography };
