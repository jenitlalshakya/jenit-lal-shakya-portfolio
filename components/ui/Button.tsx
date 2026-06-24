"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; section?: undefined };

type ButtonAsScroll = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    section: string;
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    section?: undefined;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsScroll | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:bg-surface-hover",
  ghost: "text-muted hover:text-foreground hover:bg-surface-hover",
  outline:
    "border border-border text-foreground hover:border-accent/50 hover:bg-accent/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("section" in props && props.section) {
    const { section, onClick, ...buttonProps } = props as ButtonAsScroll;
    return (
      <button
        type="button"
        className={classes}
        onClick={(event) => {
          scrollToSection(section);
          onClick?.(event);
        }}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
};
