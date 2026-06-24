import type { IconType } from "react-icons";

export type NavLink = {
  label: string;
  section: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type SkillCategory = {
  title: string;
  skills: {
    name: string;
    icon: IconType;
  }[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education" | "freelance";
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
};

export type Achievement = {
  id: string;
  value: string;
  label: string;
};
