"use client"

import { useEffect } from "react";

export default function Champion() {

  const SLIDE_TIME = 5000;

  useEffect(() => {
    const totalTime = SLIDE_TIME;

    const id = setTimeout(() => {
      window.dispatchEvent(new Event("dashboard:next"));
    }, totalTime);

    return () => clearTimeout(id);
  }, [8]);

  return null;

}
