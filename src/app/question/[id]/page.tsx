"use client";

import { Button, Header, Typography } from "@/components";
import { Option, QuestionMeta } from "@/quiz.config";
import { useAnswersStore, useAppStore, useQuizStore } from "@/store";
import classNames from "classnames";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./_styles/page.module.scss";
import { Params } from "./_types";

const QuestionPage = () => {
  const { answers } = useAnswersStore();
  const { mode } = useAppStore();

  const { id } = useParams<Params>();
  const router = useRouter();

  const { title, description, options, steps, setQuestion, changeStep } =
    useQuizStore();

  useEffect(() => {
    setQuestion(id);
  }, []);

  const selectOption = (
    nextQuestionId?: QuestionMeta["id"],
    answerId?: Option["id"]
  ) => {
    const nextDefinedQuestionId = nextQuestionId ?? steps?.nextId;
    if (nextDefinedQuestionId) {
      changeStep(nextDefinedQuestionId, id, answerId);
      router.push(`${nextDefinedQuestionId}`);
    } else {
      alert(JSON.stringify(answers, null, 2));
    }
  };

  return (
    <main className={classNames(styles.main, styles[`mode-${mode}`])}>
      <Header />

      <div className={styles.questionWrapper}>
        <div className={styles.descriptionWrapper}>
          <Typography size="l">{title}</Typography>

          {description && <Typography size="sm">{description}</Typography>}
        </div>

        <ul className={styles.options}>
          {options?.map(({ id: optionId, title: optionTitle, nextId }) => (
            <li key={optionId}>
              <Button onClick={() => selectOption(nextId, optionId)}>
                {optionTitle}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default QuestionPage;
