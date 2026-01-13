"use client"

import { useEffect } from "react";

export default function Workers() {

  const SLIDE_TIME = 4000;
  const SLIDES = Math.ceil(8 / 2);

  useEffect(() => {
    const totalTime = SLIDE_TIME * SLIDES;

    const id = setTimeout(() => {
      window.dispatchEvent(new Event("dashboard:next"));
    }, totalTime);

    return () => clearTimeout(id);
  }, [8]);

  return null;

}
