"use client";

import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export const Projects = () => (
  <section id="projects" className="section-padding" aria-labelledby="projects-heading">
    <Container>
      <ScrollReveal>
        <SectionTitle
          label="Projects"
          title="Selected work & experiments"
          description="A mix of client deliverables, personal builds, and open-source contributions."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ProjectCarousel projects={projects} />
      </ScrollReveal>
    </Container>
  </section>
);
