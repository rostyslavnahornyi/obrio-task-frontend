/* eslint-disable no-param-reassign */
import { Option, QUIZ, QuestionMeta } from "@/quiz.config";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useQuizStore } from "./quiz.store";

type Answer = {
  questionId: QuestionMeta["id"];
  selectedId: Option["id"];
};

interface AnswersState {
  answers: Answer[];
  addAnswer: (questionId: QuestionMeta["id"], selectedId: Option["id"]) => void;
  clear: () => void;
}

const useAnswersStore = create<AnswersState>()(
  persist(
    immer((set, get) => ({
      answers: get()?.answers ?? [],
      addAnswer: (questionId, selectedId) => {
        set((state) => {
          const existedAnswerIndex = state.answers.findIndex(
            (answer) => answer.questionId === questionId
          );

          if (existedAnswerIndex !== -1) {
            state.answers.splice(existedAnswerIndex, 1);
          }

          state.answers.push({ questionId, selectedId });
        });
      },
      clear: () =>
        set((state) => {
          state.answers = [];
          useQuizStore.getState().changeStep(QUIZ[0].id);
        }),
    })),
    {
      name: "answer",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export { useAnswersStore };
export type { Answer };
