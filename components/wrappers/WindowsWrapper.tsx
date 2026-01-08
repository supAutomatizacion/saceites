"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const PAGES = ["/champion", "/stadistics", "/workers", "/test"];
const ROTATE_SECONDS = 10;

export default function WindowsWrapper() {
  const router = useRouter();
  const pathname = usePathname();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % PAGES.length);
    }, ROTATE_SECONDS * 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (pathname !== PAGES[index]) {
      router.replace(PAGES[index]);
    }
  }, [index, pathname, router]);

  return null;
}
