import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export const Skills = () => (
  <section id="skills" className="section-padding bg-surface/30" aria-labelledby="skills-heading">
    <Container>
      <ScrollReveal>
        <SectionTitle
          label="Skills"
          title="Technologies I work with daily"
          description="A curated stack focused on modern web development, scalable backends, and polished user interfaces."
        />
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, catIndex) => (
          <ScrollReveal key={category.title} delay={catIndex * 0.08}>
            <Card hover glass className="h-full">
              <h3
                id={catIndex === 0 ? "skills-heading" : undefined}
                className="mb-5 text-lg font-semibold text-foreground"
              >
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <span
                      className={cn(
                        "group inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 px-3 py-2 text-sm font-medium text-foreground",
                        "transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:scale-105 hover:shadow-md hover:shadow-accent/10",
                      )}
                    >
                      <Icon
                        className="h-4 w-4 text-muted transition-colors group-hover:text-accent"
                        aria-hidden
                      />
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);
