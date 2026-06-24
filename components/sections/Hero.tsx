"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineSparkles } from "react-icons/hi2";
import { ScrollLink } from "@/components/common/ScrollLink";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const codeSnippet = `const developer = {
  name: "${siteConfig.name}",
  role: "${siteConfig.role}",
  location: "${siteConfig.location}",
};`;

export const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-[100dvh] min-h-screen items-center overflow-x-hidden overflow-y-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    aria-label="Introduction"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[min(500px,80vh)] w-[min(800px,100vw)] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-16 top-1/3 h-56 w-56 rounded-full bg-cyan-500/15 blur-[100px] sm:-right-32 sm:h-72 sm:w-72" />
      <div className="absolute -left-10 bottom-1/4 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px] sm:-left-20 sm:h-64 sm:w-64" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>

    <Container className="relative w-full min-w-0">
      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs text-muted backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="truncate">{siteConfig.availability}</span>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="min-w-0"
          >
            <p className="text-lg font-medium text-muted sm:text-xl md:text-2xl">
              Hi, I&apos;m
            </p>
            <h1 className="mt-2 font-display text-[clamp(1.75rem,6vw,3.75rem)] font-bold leading-[1.12] tracking-tight text-balance break-words">
              <span className="gradient-text">{siteConfig.name}</span>
            </h1>
            <p className="mt-3 text-xl font-semibold leading-snug text-muted sm:text-2xl md:text-3xl lg:text-4xl">
              {siteConfig.role}
            </p>
          </motion.div>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
          >
            {siteConfig.tagline} Based in {siteConfig.location}.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"
          >
            <Button section="projects" variant="primary" size="lg">
              View my work
            </Button>
            <Button section="contact" variant="outline" size="lg">
              Get in touch
            </Button>
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}>
            <SocialLinks className="mt-8 sm:mt-10" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-w-0 lg:block"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-violet-500 to-cyan-500 opacity-20 blur-2xl" />
            <div className="glass relative flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-3xl border border-border p-6 shadow-2xl xl:p-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <HiOutlineSparkles className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              </div>
              <pre className="mt-4 max-h-40 overflow-auto rounded-xl bg-background/60 p-3 font-mono text-[0.65rem] leading-relaxed text-muted sm:mt-6 sm:max-h-none sm:p-4 sm:text-xs">
                <code className="break-all whitespace-pre-wrap">{codeSnippet}</code>
              </pre>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
                {["React", "TypeScript", "Node.js", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-surface-hover px-2 py-1.5 text-center text-xs font-medium text-foreground sm:px-3 sm:py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <ScrollLink
          section="about"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="h-5 w-5 animate-bounce" />
        </ScrollLink>
      </motion.div>
    </Container>
  </section>
);
