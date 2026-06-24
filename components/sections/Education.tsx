"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { educationItems } from "@/data/education";
import { cn } from "@/lib/utils";

export const Education = () => (
  <section
    id="education"
    className="section-padding bg-surface/30"
    aria-labelledby="education-heading"
  >
    <Container>
      <ScrollReveal>
        <SectionTitle
          label="Education"
          title="Where I've studied"
          description="A timeline of academic milestones that built the foundation for my development journey."
        />
      </ScrollReveal>

      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-border to-transparent md:left-1/2 md:ml-[1px] md:block"
          aria-hidden
        />

        <ol className="space-y-10 md:space-y-14">
          {educationItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <li
                className={cn(
                  "relative md:grid md:grid-cols-2 md:gap-10",
                  index % 2 === 0 ? "md:text-right" : "",
                )}
              >
                <div
                  className={cn(
                    "hidden md:block",
                    index % 2 === 0 ? "md:order-2 md:text-left" : "md:pr-10",
                  )}
                >
                  <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-400">
                    Education
                  </span>
                  <time className="mt-2 block text-sm font-medium text-accent">
                    {item.startYear} – {item.endYear}
                  </time>
                </div>

                <div
                  className={cn(
                    "relative rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 md:px-8 md:max-w-md",
                    index % 2 === 0 ? "md:order-1 md:ml-auto" : "md:mr-auto",
                  )}
                >
                  <div className="absolute -left-[9px] top-6 hidden h-4 w-4 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2 md:top-8" />

                  <div className="mb-3 flex flex-wrap items-center gap-2 md:hidden">
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-400">
                      Education
                    </span>
                    <time className="text-sm font-medium text-accent">
                      {item.startYear} – {item.endYear}
                    </time>
                  </div>

                  <h3
                    id={index === 0 ? "education-heading" : undefined}
                    className="text-lg font-semibold text-foreground tracking-tight"
                  >
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-muted">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-xs text-muted/70">{item.location}</p>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </Container>
  </section>
);
