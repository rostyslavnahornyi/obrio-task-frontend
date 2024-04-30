import { ReactNode } from "react";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@/styles/reset.css";

export const metadata: Metadata = {
  title: "Obrio",
  description: "Tech test task at OBRIO | Frontend",
};

const openSans = Open_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={openSans.className}>
    <body className={openSans.className}>{children}</body>
  </html>
);

export default RootLayout;
