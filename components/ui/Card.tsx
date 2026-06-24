import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
};

export const Card = ({
  children,
  className,
  hover = false,
  glass = false,
}: CardProps) => (
  <div
    className={cn(
      "rounded-2xl border border-border bg-surface p-6",
      glass && "glass",
      hover &&
        "transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1",
      className,
    )}
  >
    {children}
  </div>
);
