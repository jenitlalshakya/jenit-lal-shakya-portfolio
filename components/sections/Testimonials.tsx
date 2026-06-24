import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { achievements, testimonials } from "@/data/testimonials";

export const Testimonials = () => (
  <section
    id="testimonials"
    className="section-padding"
    aria-labelledby="testimonials-heading"
  >
    <Container>
      <ScrollReveal>
        <SectionTitle
          label="Testimonials"
          title="Trusted by teams & founders"
          description="Feedback from collaborators who've shipped products together."
          align="center"
        />
      </ScrollReveal>

      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {achievements.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.05}>
            <div className="text-center">
              <p className="text-2xl font-bold gradient-text sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                {item.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.1}>
            <Card hover className="relative flex h-full flex-col">
              <HiOutlineChatBubbleLeftRight
                className="mb-4 h-8 w-8 text-accent/40"
                aria-hidden
              />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <p
                    id={index === 0 ? "testimonials-heading" : undefined}
                    className="font-semibold text-foreground"
                  >
                    {item.author}
                  </p>
                  <p className="text-xs text-muted">
                    {item.role}, {item.company}
                  </p>
                </cite>
              </footer>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);
