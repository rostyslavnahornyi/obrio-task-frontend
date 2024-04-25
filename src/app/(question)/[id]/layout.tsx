import { Header } from "@/components";
import { QUIZ } from "@/quiz.config";
import { ReactNode, useMemo } from "react";
import classNames from "classnames";
import styles from "./_styles/layout.module.scss";
import { Params } from "./_types";

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ.map(({ id }) => ({ id }));
}

const QuestionPage = ({
  children,
  params,
}: {
  params: Params;
  children: ReactNode;
}) => {
  const mode = useMemo(
    () => QUIZ.find(({ id }) => id === params.id)?.mode,
    [params.id]
  );

  return (
    <main className={classNames(styles.questionLayout, styles[`mode-${mode}`])}>
      <Header />
      {children}
    </main>
  );
};

export default QuestionPage;
