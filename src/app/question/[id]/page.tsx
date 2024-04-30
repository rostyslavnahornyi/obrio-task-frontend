"use client";

import { Button, Header, Typography } from "@/components";
import classNames from "classnames";
import styles from "./_styles/page.module.scss";
import { usePage } from "./_hooks/page.hook";

const QuestionPage = () => {
  const { mode, title, description, options, isSelected, selectOption } =
    usePage();

  return (
    <main className={classNames(styles.main, styles[`mode-${mode}`])}>
      <Header />

      <div className={styles.questionWrapper}>
        <div>
          <Typography checkInterpolation size="l">
            {title}
          </Typography>

          {description && <Typography size="sm">{description}</Typography>}
        </div>

        <ul className={styles.options}>
          {options?.map(({ id: optionId, title: optionTitle, nextId }) => (
            <li key={optionId}>
              <Button
                selected={isSelected(optionId)}
                onClick={() => selectOption(nextId, optionId)}
              >
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
