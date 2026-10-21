import type { CVData, CVProjectEntry } from "@/types";
import { educationItems } from "@/data/education";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/data/site";

const cvProjectSummaries: Record<string, string> = {
  "tiktok-downloader":
    "Web applicaton for downloading TikTok videos, built with Next.js, TypeScript, and Tailwind CSS.",
};

const portfolioWebsite: CVProjectEntry = {
  title: "Portfolio Website",
  description:
    "Personal portfolio website built with next.js, TypeScript, and Tailwind CSS to showcase my projects, skills, and learning journey.",
  tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  liveUrl: siteConfig.url,
  githubUrl: "https://github.com/jenitlalshakya/jenit-lal-shakya-portfolio",
};

const toDisplayUrl = (href: string) => {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
};

export const cvData = {
  name: siteConfig.name,
  headline: "Aspiring Developer · BIM Student",
  summary:
    "Aspiring web developer with hands-on experience building web applications using React, Next.js, and Tailwind CSS. Passionate about creating responsive, user-friendly interfaces, and continuously improving development skills through practical projects and independent learning. Currently expanding knowledge of TypeScript, backend development, and databases, with a strong interest in building reliable, full-stack applications.",
  email: siteConfig.email,
  phone: "+977-9840041510",
  location: siteConfig.location,
  links: [
    ...socialLinks
      .filter((link) => link.label !== "Email")
      .map(({ label, href }) => ({ label, href, text: toDisplayUrl(href) })),
    {
      label: "Portfolio",
      href: siteConfig.url,
      text: toDisplayUrl(siteConfig.url),
    },
  ],
  education: educationItems.map(
    ({ degree, institution, location, startYear, endYear, description }) => ({
      degree,
      institution,
      location,
      startYear,
      endYear,
      description,
    }),
  ),
  skillCategories: [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    { title: "Databases", skills: ["MongoDB", "PostgreSQL"] },
    { title: "Tools", skills: ["Git", "GitHub"] },
  ],
  projects: [
    portfolioWebsite,
    ...projects.map(({ id, title, description, tags, liveUrl, githubUrl }) => ({
      title,
      description: cvProjectSummaries[id] ?? description,
      tags,
      liveUrl,
      githubUrl,
    })),
  ],
} satisfies CVData;

export const cvFileName = `${cvData.name.replace(/\s+/g, "-")}-CV.pdf`;
