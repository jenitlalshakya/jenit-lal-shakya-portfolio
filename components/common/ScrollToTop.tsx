"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onMenuChange = (e: Event) => setMenuOpen((e as CustomEvent<{ isOpen: boolean }>).detail.isOpen);
    window.addEventListener("mobilemenu:change", onMenuChange);
    return () => window.addEventListener("mobilemenu:change", onMenuChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(!menuOpen && window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => scrollToSection("hero")}
          aria-label="Scroll to top"
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "flex h-12 w-12 items-center justify-center",
            "rounded-2xl border-2 border-border bg-background/70 backdrop-blur-xl",
            "shadow-lg shadow-black/5",
            "text-muted transition-colors hover:text-accent hover:border-accent/40",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20",
          )}
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiArrowUp className="h-5 w-5" aria-hidden />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
