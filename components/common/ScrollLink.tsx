"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ScrollLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  section: string;
  children: ReactNode;
};

export const ScrollLink = ({
  section,
  children,
  className,
  onClick,
  ...props
}: ScrollLinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(section);
    onClick?.(event);
  };

  return (
    <Link
      href="/"
      className={cn(className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};
