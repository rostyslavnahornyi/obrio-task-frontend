import { Option, QuestionMeta } from "@/quiz.config";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface AnswersState {
  answers: {
    questionId: QuestionMeta["id"];
    selectedId: Option["id"];
  }[];
  addAnswer: (questionId: QuestionMeta["id"], selectedId: Option["id"]) => void;
}

const useAnswersStore = create<AnswersState>()(
  immer((set) => ({
    answers: [],
    addAnswer: (questionId, selectedId) => {
      set((state) => {
        state.answers.push({ questionId, selectedId });
      });
    },
  }))
);

export { useAnswersStore };
