import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@/styles/reset.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obrio",
  description: "Tech test task at OBRIO | Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
