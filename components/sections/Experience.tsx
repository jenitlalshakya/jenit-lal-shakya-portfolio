import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experienceItems } from "@/data/experience";
import { cn } from "@/lib/utils";

const typeLabels = {
  work: "Development",
  education: "Education",
  freelance: "Projects",
} as const;

const typeColors = {
  work: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  education: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  freelance: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export const Experience = () => (
  <section
    id="experience"
    className="section-padding bg-surface/30"
    aria-labelledby="experience-heading"
  >
    <Container>
      <ScrollReveal>
        <SectionTitle
          label="Experience"
          title="Where I've grown"
          description="A timeline of learning, projects, and early real-world experience shaping my development journey."
        />
      </ScrollReveal>

      <div className="relative mx-auto max-w-3xl">

        {/* TIMELINE LINE (FIXED) */}
        <div
          className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-border to-transparent md:left-1/2 md:ml-[1px] md:block"
          aria-hidden
        />

        <ol className="space-y-10 md:space-y-14">

          {experienceItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <li
                className={cn(
                  "relative md:grid md:grid-cols-2 md:gap-10",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
              >

                {/* LEFT / RIGHT SIDE META */}
                <div
                  className={cn(
                    "hidden md:block",
                    index % 2 === 0
                      ? "md:order-2 md:text-left"
                      : "md:pr-10"
                  )}
                >
                  <span
                    className={cn(
                      "inline-block rounded-full border px-3 py-1 text-xs font-semibold",
                      typeColors[item.type]
                    )}
                  >
                    {typeLabels[item.type]}
                  </span>

                  <time className="mt-2 block text-sm font-medium text-accent">
                    {item.period}
                  </time>
                </div>

                {/* MAIN CARD */}
                <div
                  className={cn(
                    "relative rounded-2xl border border-border bg-surface p-6 md:px-8 transition-colors hover:border-accent/30 md:max-w-md",
                    index % 2 === 0
                      ? "md:order-1 md:ml-auto"
                      : "md:mr-auto"
                  )}
                >

                  {/* TIMELINE DOT (FIXED POSITION) */}
                  <div className="absolute -left-[9px] top-6 hidden h-4 w-4 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2 md:top-8" />

                  {/* MOBILE TAGS */}
                  <div className="md:hidden mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-semibold",
                        typeColors[item.type]
                      )}
                    >
                      {typeLabels[item.type]}
                    </span>

                    <time className="text-sm font-medium text-accent">
                      {item.period}
                    </time>
                  </div>

                  {/* CONTENT */}
                  <h3
                    id={index === 0 ? "experience-heading" : undefined}
                    className="text-lg font-semibold text-foreground tracking-tight"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-muted">
                    {item.organization}
                  </p>

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