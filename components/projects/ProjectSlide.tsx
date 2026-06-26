"use client";

import Image from "next/image";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectSlideProps = {
  project: Project;
  onPreview: (project: Project) => void;
};

export const ProjectSlide = ({ project, onPreview }: ProjectSlideProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-border bg-surface">
      <button
        type="button"
        onClick={() => onPreview(project)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onPreview(project);
          }
        }}
        className="block w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        aria-label={`Preview ${project.title}`}
      >
        <ProjectImage project={project} />
      </button>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="pointer-events-none absolute bottom-0 left-0 p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-white/80 transition-colors group-hover:text-white/90">
          Click for Preview →
        </p>
      </div>
    </div>
  );
};

const ProjectImage = ({ project }: { project: Project }) => {
  if (!project.image) {
    return (
      <div
        className="w-full bg-surface-hover"
        style={{ aspectRatio: "16/9" }}
      />
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={800}
        height={450}
        className={cn(
          "block w-full h-auto transition-transform duration-500 ease-out",
          "group-hover:scale-105",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-colors duration-300",
          "group-hover:bg-white/5",
        )}
        aria-hidden
      />
    </div>
  );
};
