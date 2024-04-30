import { ReactNode } from "react";

import type { Metadata } from "next";

import { QUIZ } from "@/quiz.config";
import { Params } from "./_types";

export async function generateMetadata({
  params: { id },
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: `OBRIO Quiz | Question ${id}`,
    description: "Tech test task at OBRIO | Frontend",
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ.map(({ id }) => ({ id }));
}

const QuestionPageLayout = ({ children }: { children: ReactNode }) => children;

export default QuestionPageLayout;
