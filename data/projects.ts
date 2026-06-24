import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "tiktok-downloader",
    title: "TikTok Downloader",
    description: "Real-time SaaS analytics dashboard with custom charts, role-based access, and sub-200ms interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/tiktok-downloader.png",
    liveUrl: "https://tiktok-media-downloader.vercel.app",
    githubUrl: "https://github.com/jenitlalshakya/tiktok-downloader",
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description: "A simple, fast, and secure password generator that creates strong random passwords directly in the browser with customizable length and character options—no data stored, no sign-up required, fully client-side.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/password-generator.png",
    liveUrl: "https://password-gen-tool.vercel.app",
    githubUrl: "https://github.com/jenitlalshakya/password-generator",
  },
];
