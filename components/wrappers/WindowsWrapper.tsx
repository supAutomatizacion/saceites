"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const PAGES = [
  "/dashboard/automatic/workers",
  "/dashboard/automatic/champion",
  "/dashboard/automatic/stadistics",
];

export default function WindowsWrapper() {
  const router = useRouter();
  const pathname = usePathname();

  const BASE = "/dashboard/automatic";

  useEffect(() => {
    if (pathname === BASE) {
      router.replace(PAGES[0]);
    }
  }, [pathname, router]);

  useEffect(() => {
    const handler = () => {
      const currentIndex = PAGES.indexOf(pathname);
      const nextIndex = (currentIndex + 1) % PAGES.length;
      router.replace(PAGES[nextIndex]);
    };

    window.addEventListener("dashboard:next", handler);
    return () => window.removeEventListener("dashboard:next", handler);
  }, [pathname, router]);

  return null;
}
