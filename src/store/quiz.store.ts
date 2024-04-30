import { QuestionMeta, QUIZ } from "@/quiz.config";
import { create } from "zustand";
import { useAnswersStore } from "./answers.store";

interface QuizState extends Partial<QuestionMeta> {
  setQuestion: (id: QuestionMeta["id"]) => void;
  changeStep: (
    nextQuestionId: QuestionMeta["id"],
    currentQuestionId?: QuestionMeta["id"],
    answerId?: string
  ) => void;
}

const useQuizStore = create<QuizState>()((set) => ({
  setQuestion: (questionId) =>
    set((state) => {
      const question = QUIZ.find(({ id }) => id === questionId);

      return {
        ...state,
        description: undefined,
        ...question,
      };
    }),
  changeStep: (quizQuestionId, currentQuestionId, answerId) =>
    set(() => {
      const question = QUIZ.find(({ id }) => id === quizQuestionId);

      if (answerId && currentQuestionId) {
        useAnswersStore.getState().addAnswer(currentQuestionId, answerId);
      }

      return { description: undefined, ...question };
    }),
}));

export { useQuizStore };
