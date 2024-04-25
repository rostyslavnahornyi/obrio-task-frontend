"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

function Root() {
  useEffect(() => redirect("/1"), []);

  
}

export default Root;
