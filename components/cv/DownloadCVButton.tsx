"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const buttonClasses = cn(
  "inline-flex items-center justify-center cursor-pointer rounded-full border font-medium transition-all duration-300",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "active:scale-[0.98] h-12 px-6 text-base gap-2",
  "border-border text-foreground hover:border-accent/50 hover:bg-accent/5",
);

const CVDownloadLink = dynamic(() => import("@/components/cv/CVDownloadLink"), {
  ssr: false,
  loading: () => (
    <span className={cn(buttonClasses, "pointer-events-none opacity-60")}>
      Preparing PDF…
    </span>
  ),
});

type DownloadCVButtonProps = {
  className?: string;
};

export const DownloadCVButton = ({ className }: DownloadCVButtonProps) => (
  <CVDownloadLink className={cn(buttonClasses, className)} />
);
