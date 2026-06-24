import { ScrollLink } from "@/components/common/ScrollLink";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50 py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <ScrollLink
              section="hero"
              className="font-display text-xl font-bold text-foreground"
            >
              {siteConfig.name}
            </ScrollLink>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <SocialLinks className="mt-6" size="sm" />
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.section}>
                  <ScrollLink
                    section={link.section}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
};
