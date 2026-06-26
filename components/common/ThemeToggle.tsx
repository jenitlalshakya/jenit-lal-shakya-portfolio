"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface",
          className,
        )}
      />
    );
  }

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const currentTheme = theme ?? "system";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`Current theme: ${currentTheme}`}
      title={`Current theme: ${currentTheme}`}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent hover:bg-accent/10",
        className,
      )}
    >
      {currentTheme === "light" ? (
        <HiOutlineSun className="h-5 w-5" aria-hidden />
      ) : currentTheme === "dark" ? (
        <HiOutlineMoon className="h-5 w-5" aria-hidden />
      ) : (
        <HiOutlineComputerDesktop className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
};
