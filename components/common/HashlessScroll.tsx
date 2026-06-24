"use client";

import { useEffect } from "react";
import { clearHashFromUrl, scrollToSection } from "@/lib/scroll";

export const HashlessScroll = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    scrollToSection(hash);
    clearHashFromUrl();
  }, []);

  return null;
};
