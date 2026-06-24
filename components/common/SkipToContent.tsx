"use client";

import { scrollToSection } from "@/lib/scroll";

export const SkipToContent = () => {
  const handleSkip = () => {
    const main = document.getElementById("main-content");
    main?.focus({ preventScroll: true });
    scrollToSection("hero");
  };

  return (
    <button
      type="button"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
    >
      Skip to main content
    </button>
  );
};
