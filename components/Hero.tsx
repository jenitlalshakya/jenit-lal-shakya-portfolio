"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/Container";
import me from "@/public/images/me.png";

const SUBTEXT =
  "Full-stack developer crafting premium UI and scalable digital experiences.";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Professional roles shown in the typing line (edit here). */
const TYPING_ROLES = [
  "I'm a full-stack developer",
  "I'm a freelance web developer",
  "I build scalable web applications",
  "I design premium user interfaces",
  "I specialize in Git and GitHub workflows",
  "I craft modern web experiences",
] as const;

/** Last hero entrance finishes: second CTA delay (1.28s) + duration (0.75s). */
const HERO_INTRO_COMPLETE_MS = 1280 + 750;

/** Extra wait after hero motions before typing begins (1.2–1.8s range). */
const TYPING_START_DELAY_MS = 1500;

const TYPE_CHAR_MS = 48;
const DELETE_CHAR_MS = 36;
const HOLD_FULL_MS = 1300;

type UseTypingCycleOptions = {
  enabled: boolean;
  startAfterMs: number;
  typeCharMs: number;
  deleteCharMs: number;
  holdFullMs: number;
};

function useTypingCycle(
  roles: readonly string[],
  {
    enabled,
    startAfterMs,
    typeCharMs,
    deleteCharMs,
    holdFullMs,
  }: UseTypingCycleOptions
) {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const roleIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rolesRef = useRef(roles);
  rolesRef.current = roles;

  useEffect(() => {
    const clearTimer = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    if (!enabled) {
      clearTimer();
      const first = rolesRef.current[0] ?? "";
      textRef.current = first;
      setText(first);
      return;
    }

    textRef.current = "";
    roleIndexRef.current = 0;
    setText("");

    const schedule = (fn: () => void, ms: number) => {
      clearTimer();
      timeoutRef.current = setTimeout(fn, ms);
    };

    const typeNext = () => {
      const list = rolesRef.current;
      if (list.length === 0) return;
      const full = list[roleIndexRef.current % list.length];
      if (textRef.current.length < full.length) {
        textRef.current = full.slice(0, textRef.current.length + 1);
        setText(textRef.current);
        schedule(typeNext, typeCharMs);
      } else {
        schedule(deleteNext, holdFullMs);
      }
    };

    const deleteNext = () => {
      if (textRef.current.length > 0) {
        textRef.current = textRef.current.slice(0, -1);
        setText(textRef.current);
        schedule(deleteNext, deleteCharMs);
      } else {
        roleIndexRef.current += 1;
        schedule(typeNext, typeCharMs);
      }
    };

    const startId = setTimeout(() => {
      typeNext();
    }, startAfterMs);

    return () => {
      clearTimeout(startId);
      clearTimer();
    };
  }, [enabled, startAfterMs, typeCharMs, deleteCharMs, holdFullMs]);

  return text;
}

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const words = useMemo(() => SUBTEXT.split(/\s+/), []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  const instant = prefersReducedMotion === true;

  const titleTransition = {
    duration: instant ? 0 : 1,
    ease: EASE,
  };

  const wordBaseDelay = instant ? 0 : 0.48;
  const wordStagger = instant ? 0 : 0.042;

  const buttonDelays = instant ? [0, 0] : [1.12, 1.28];

  const hoverProps = instant
    ? {}
    : {
        whileHover: { scale: 1.025 },
        whileTap: { scale: 0.99 },
      };

  const typingStartAfterMs = instant
    ? 0
    : HERO_INTRO_COMPLETE_MS + TYPING_START_DELAY_MS;

  const typingLine = useTypingCycle(TYPING_ROLES, {
    enabled: !instant,
    startAfterMs: typingStartAfterMs,
    typeCharMs: TYPE_CHAR_MS,
    deleteCharMs: DELETE_CHAR_MS,
    holdFullMs: HOLD_FULL_MS,
  });

  return (
    <Container
      id="home"
      className="pt-10 pb-20 sm:pt-24 sm:pb-24 md:pt-32 md:pb-32 lg:pb-40"
    >
      <div className="grid items-center grid-cols-1 gap-10 md:gap-12 lg:grid-cols-5">
        <div className="space-y-6 sm:space-y-8 lg:col-span-3">
          <motion.h1
            className="max-w-4xl text-[2rem] leading-[1.08] font-bold tracking-tight sm:text-[2.4rem] md:text-[3rem] lg:text-[3.5rem]"
            initial={instant ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={titleTransition}
          >
            <span className="hero-heading-shimmer block">
              Hi, I&apos;m Jenit Lal Shakya
            </span>
          </motion.h1>

          <p
            className="min-h-[1.6em] text-base leading-relaxed text-[#dbe7ff]/90 sm:text-lg md:text-xl"
            aria-live={instant ? undefined : "polite"}
          >
            <span className="font-semibold tracking-wide text-lg md:text-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_14px_rgba(139,92,246,0.45)]">
              {typingLine}
            </span>
            <span
              className="ml-0.5 inline-block font-light text-[#7faeff] animate-pulse"
              aria-hidden
            >
              |
            </span>
          </p>

          <p
            className="max-w-2xl text-sm leading-7 text-[#c2c6d6] sm:text-base sm:leading-8 md:text-lg"
            aria-label={SUBTEXT}
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="mr-[0.22em] inline-block last:mr-0"
                initial={instant ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: instant ? 0 : 0.58,
                  ease: EASE,
                  delay: wordBaseDelay + i * wordStagger,
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <motion.a
              onClick={() => handleScroll("projects")}
              className="primary-gradient inline-flex w-full cursor-pointer touch-manipulation justify-center rounded-[3rem] px-6 py-3 text-sm font-semibold text-[#131313] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_20px_rgba(10,22,46,0.6)] transition-[box-shadow,filter] duration-300 ease-out hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(127,174,255,0.35),0_0_28px_rgba(77,142,255,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7faeff] sm:w-auto sm:px-8"
              initial={instant ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: instant ? 0 : 0.75,
                ease: EASE,
                delay: buttonDelays[0],
              }}
              {...hoverProps}
            >
              Explore Projects
            </motion.a>

            <motion.a
              onClick={() => handleScroll("contact")}
              className="inline-flex w-full cursor-pointer touch-manipulation justify-center rounded-[3rem] px-6 py-3 text-sm font-semibold text-[#dbe7ff] border border-[#4d8eff]/60 bg-linear-to-r from-[#1b2a48]/90 to-[#14213f]/90 shadow-[0_0_0_1px_rgba(77,142,255,0.12),0_8px_20px_rgba(10,22,46,0.6)] transition-[box-shadow,filter,border-color,color] duration-300 ease-out hover:border-[#7faeff] hover:text-[#f2f6ff] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(127,174,255,0.35),0_0_26px_rgba(77,142,255,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7faeff] sm:w-auto sm:px-8"
              initial={instant ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: instant ? 0 : 0.75,
                ease: EASE,
                delay: buttonDelays[1],
              }}
              {...hoverProps}
            >
              Let&apos;s Connect
            </motion.a>
          </div>
        </div>

        <div className="hidden lg:col-span-2 lg:flex lg:justify-end">
          {/* Outer wrapper — positions the SVG ring + image together */}
          <div className="relative h-[400px] w-[400px] translate-y-[-40px]">

            {/* ── Rotating segmented neon arc ring ── */}
            {/*
              Image = 400×400 circle → radius 200px.
              SVG viewBox centred at (200,200).
              Ring radius = 201 so inner stroke edge (201 − 0.75) = 200.25
              sits flush on the image boundary. strokeWidth = 1.5.
              Arcs are all ≤ 25 ° and intentionally uneven.
              Point at θ (clockwise from 12-o'clock):
                x = 200 + 201·sin(θ)   y = 200 − 201·cos(θ)

              Arc layout (8 arcs, uneven gaps):
                #1  12°   from   0° →  12°   gap 48°
                #2   8°   from  60° →  68°   gap 37°
                #3  22°   from 105° → 127°   gap 28°
                #4   6°   from 155° → 161°   gap 42°
                #5  18°   from 203° → 221°   gap 31°
                #6  10°   from 252° → 262°   gap 25°
                #7  15°   from 287° → 302°   gap 33°
                #8   5°   from 335° → 340°   gap 20° (wraps to arc 1)
            */}
            <div
              className="neon-ring-spin absolute inset-0 pointer-events-none"
              aria-hidden
            >
              <svg
                viewBox="0 0 404 404"
                width="404"
                height="404"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                <defs>
                  <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Arc 1 — 12° (0° → 12°) */}
                <path
                  d="M 200 -1 A 201 201 0 0 1 241.79 3.39"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Arc 2 — 8° (60° → 68°) */}
                <path
                  d="M 374.07 99.5 A 201 201 0 0 1 386.36 124.7"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Arc 3 — 22° (105° → 127°) */}
                <path
                  d="M 394.15 252.02 A 201 201 0 0 1 360.53 320.96"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Arc 4 — 6° (155° → 161°) */}
                <path
                  d="M 284.95 382.17 A 201 201 0 0 1 265.44 390.05"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Arc 5 — 18° (203° → 221°) */}
                <path
                  d="M 121.46 385.02 A 201 201 0 0 1 68.13 351.7"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Arc 6 — 10° (252° → 262°) */}
                <path
                  d="M 8.84 262.11 A 201 201 0 0 1 0.96 227.97"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Arc 7 — 15° (287° → 302°) */}
                <path
                  d="M 7.78 141.23 A 201 201 0 0 1 29.54 93.49"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* Arc 8 — 5° (335° → 340°) */}
                <path
                  d="M 115.05 17.83 A 201 201 0 0 1 131.25 11.12"
                  fill="none"
                  stroke="#668dd2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#neon-glow)"
                />

                {/* ── Accent dots — asymmetrically placed in gaps ── */}
                {/* Dot in gap after arc 1 at ~38° */}
                <circle cx="323.75" cy="41.61" r="2" fill="#668dd2" filter="url(#neon-glow)" />
                {/* Dot in gap after arc 3 at ~142° */}
                <circle cx="323.75" cy="358.39" r="1.5" fill="#668dd2" filter="url(#neon-glow)" />
                {/* Dot in gap after arc 5 at ~240° */}
                <circle cx="25.93" cy="300.5" r="2.5" fill="#668dd2" filter="url(#neon-glow)" />
                {/* Dot in gap after arc 6 at ~275° */}
                <circle cx="-0.24" cy="182.48" r="1.5" fill="#668dd2" filter="url(#neon-glow)" />
                {/* Dot in gap after arc 8 at ~352° */}
                <circle cx="172.03" cy="0.96" r="2" fill="#668dd2" filter="url(#neon-glow)" />
              </svg>
            </div>

            {/* Circular image — sits at z-10 so glow doesn't bleed in */}
            <div className="relative h-full w-full rounded-full overflow-hidden z-10">
              <Image
                src={me}
                alt="Jenit Lal Shakya"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                loading="eager"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
