import Image from "next/image";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { aboutContent } from "@/data/about";

export const About = () => (
  <section id="about" className="section-padding">
    <Container>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        <ScrollReveal className="order-2 lg:order-1">
          <SectionTitle
            label="About"
            title="Building digital products that feel effortless"
            description={aboutContent.intro}
          />
        </ScrollReveal>

        <ScrollReveal className="order-1 lg:order-2 flex justify-center lg:justify-end lg:mt-2">
          <Image
            src="/profile/me.jpeg"
            alt="Jenit"
            width={256}
            height={256}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl object-cover border border-border/20 shadow-md transition-transform duration-300 hover:scale-[1.02]"
          />
        </ScrollReveal>

      </div>
      
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {aboutContent.highlights.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <Card hover className="h-full">
              <h3 className="text-base font-medium text-foreground tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">

        <ScrollReveal>
          <div>
            <h3 className="text-base font-medium text-foreground tracking-tight">
              My journey
            </h3>

            <ul className="mt-5 space-y-4">
              {aboutContent.journey.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            {aboutContent.stats.map((stat) => (
              <Card
                key={stat.label}
                className="flex flex-col items-center justify-center py-7 text-center"
              >
                <span className="text-2xl font-medium text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-widest text-muted">
                  {stat.label}
                </span>
              </Card>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </Container>
  </section>
);
