import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiFramer,
  SiJest,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandVercel } from "react-icons/tb";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: TbBrandVercel },
      { name: "Jest", icon: SiJest },
    ],
  },
  {
    title: "Design",
    skills: [{ name: "Figma", icon: SiFigma }],
  },
];
