import type { Achievement, Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Jordan transformed our legacy dashboard into a modern, blazing-fast product. Attention to detail and communication were exceptional throughout.",
    author: "Sarah Chen",
    role: "Product Lead",
    company: "NovaTech Labs",
  },
  {
    id: "t2",
    quote:
      "Rare combination of engineering rigor and design sensibility. Delivered ahead of schedule with a codebase our team could easily extend.",
    author: "Marcus Webb",
    role: "CTO",
    company: "Startup Collective",
  },
  {
    id: "t3",
    quote:
      "Our conversion rate jumped 28% after the redesign. Jordan understood our users and shipped a polished experience we’re proud of.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Atelier Commerce",
  },
];

export const achievements: Achievement[] = [
  { id: "a1", value: "40+", label: "Projects Delivered" },
  { id: "a2", value: "98", label: "Avg. Lighthouse Score" },
  { id: "a3", value: "5★", label: "Client Rating" },
  { id: "a4", value: "3", label: "Open Source Libs" },
];
