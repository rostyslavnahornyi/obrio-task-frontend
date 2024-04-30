import { Option, QUIZ, QuestionMeta } from "@/quiz.config";
import { useAnswersStore, useAppStore, useQuizStore } from "@/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Params } from "../_types";

const usePage = () => {
  const { mode } = useAppStore();
  const { answers, clear } = useAnswersStore();
  const { title, description, options, steps, setQuestion, changeStep } =
    useQuizStore();

  const { id } = useParams<Params>();
  const router = useRouter();

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

      router.push(QUIZ[0].id);
      clear();
    }
  };

  const isSelected = (optionId: Option["id"]): boolean =>
    answers.some(
      ({ questionId, selectedId }) =>
        id === questionId && selectedId === optionId
    );

  return { mode, title, description, options, selectOption, isSelected };
};

export { usePage };
