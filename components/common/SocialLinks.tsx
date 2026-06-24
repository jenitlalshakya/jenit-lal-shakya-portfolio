import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md";
};

export const SocialLinks = ({
  className,
  iconClassName,
  size = "md",
}: SocialLinksProps) => {
  const sizeClasses = size === "sm" ? "h-9 w-9 text-base" : "h-11 w-11 text-lg";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:scale-105",
            sizeClasses,
            iconClassName,
          )}
        >
          <Icon aria-hidden />
        </a>
      ))}
    </div>
  );
};
