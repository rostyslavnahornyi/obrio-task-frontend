"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

function RootPage() {
  useEffect(() => redirect("question/1"), []);

  return <body />;
}

export default RootPage;
