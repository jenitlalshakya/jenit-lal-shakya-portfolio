"use client";

import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const float = {
  animate: (delay: number) => ({
    y: [0, -12, 0],
    transition: {
      delay,
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-dvh min-h-screen items-center justify-center overflow-hidden"
      role="status"
      aria-label="Page not found"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[min(400px,60vh)] w-[min(700px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-52 w-52 rounded-full bg-cyan-500/10 blur-[100px] sm:h-64 sm:w-64" />
        <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px] sm:h-52 sm:w-52" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden" aria-hidden>
        <motion.div
          custom={0}
          variants={float}
          animate="animate"
          className="absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-accent/40 sm:h-4 sm:w-4"
        />
        <motion.div
          custom={1.5}
          variants={float}
          animate="animate"
          className="absolute bottom-[25%] left-[12%] h-2 w-2 rounded-full bg-cyan-500/40 sm:h-3 sm:w-3"
        />
        <motion.div
          custom={2.5}
          variants={float}
          animate="animate"
          className="absolute left-[20%] top-[30%] h-2 w-2 rounded-full bg-violet-500/30 sm:h-2.5 sm:w-2.5"
        />
        <motion.div
          custom={1}
          variants={float}
          animate="animate"
          className="absolute bottom-[30%] right-[18%] h-1.5 w-1.5 rounded-full bg-accent/30 sm:h-2 sm:w-2"
        />
      </div>

      <Container className="relative w-full">
        <div className="flex flex-col items-center text-center">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:mb-5"
          >
            Lost in space
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-[clamp(5rem,18vw,10rem)] font-bold leading-none tracking-tight"
          >
            <span className="gradient-text">404</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-md text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 sm:mt-10"
          >
            <Button href="/" variant="primary" size="lg">
              <HiHome className="h-5 w-5" aria-hidden />
              Go to Home
            </Button>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
