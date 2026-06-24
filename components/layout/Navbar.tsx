"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ScrollLink } from "@/components/common/ScrollLink";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn, getNameInitial } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <Container>
        <nav
          aria-label="Main navigation"
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6",
            scrolled
              ? "glass border-border/80 shadow-lg shadow-black/5"
              : "border-transparent bg-transparent",
          )}
        >
          <ScrollLink
            section="hero"
            className="group flex min-w-0 items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground"
            onClick={closeMenu}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-bold text-accent-foreground transition-transform group-hover:scale-105">
              {getNameInitial(siteConfig.name)}
            </span>
            <span className="hidden truncate sm:inline max-w-[10rem] md:max-w-[14rem] lg:max-w-none">
              {siteConfig.name}
            </span>
          </ScrollLink>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.section}>
                <ScrollLink
                  section={link.section}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Button
              section="contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Let's talk
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground md:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-5 top-24 rounded-2xl border border-border bg-surface p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.section}>
                    <ScrollLink
                      section={link.section}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-surface-hover"
                    >
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <Button
                section="contact"
                variant="primary"
                size="md"
                className="mt-6 w-full"
                onClick={closeMenu}
              >
                Let's talk
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
