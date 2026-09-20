import type { Stat } from "@/types/index";

export const aboutContent = {
  intro:
    "I'm a full-stack developer passionate about building modern web applications and intuitive user experiences. I enjoy turning ideas into functional, responsive products while focusing on performance, accessibility, and clean code.",
  highlights: [
    {
    title: "Product-minded",
    description:
      "I enjoy building features that solve real user problems and create meaningful user experiences.",
    },
    {
    title: "Performance-first",
    description:
      "I pay close attention to performance, responsive design, and maintainable code in every project.",
    },
    {
    title: "Continuous Learner",
    description:
      "I'm constantly exploring modern technologies and improving my skills through real-world projects.",
    },
  ],
  journey: [
    "Started by learning programming fundamentals and how the web works.",
    "Built frontend projects using HTML, CSS, JavaScript, and responsive design principles.",
    "Currently expanding my expertise with React, Next.js, backend development, and modern web technologies.",
  ],
  stats: [
    {
      label: "Coding Experience",
      type: "dynamic",
      startDate: new Date("2025-03-25")
    },
    {
      label: "Frontend Projects",
      type: "static",
      value: "10+"
    },
    {
      label: "React Experience",
      type: "dynamic",
      startDate: new Date("2025-12-27")
    },
    {
      label: "Currently Learning",
      type: "static",
      value: "Next.js"
    },
  ] satisfies Stat[],
} as const;
