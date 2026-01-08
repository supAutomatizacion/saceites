"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PAGES = ["/champion", "/stadistics", "/workers"];
const ROTATE_SECONDS = 10;

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let i = 0;

    router.replace(PAGES[i]);

    const id = setInterval(() => {
      i = (i + 1) % PAGES.length;
      router.replace(PAGES[i]);
    }, ROTATE_SECONDS * 1000);

    return () => clearInterval(id);
  }, [router]);

  return null;
}
