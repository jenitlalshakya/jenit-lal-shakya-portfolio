import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export const SectionTitle = ({
  label,
  title,
  description,
  align = "left",
  children,
}: SectionTitleProps) => (
  <div
    className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center mx-auto max-w-2xl",
    )}
  >
    <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      {label}
    </span>
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
    )}
    {children}
  </div>
);
