"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiXMark, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

type ProjectPreviewModalProps = {
  project: Project | null;
  onClose: () => void;
};

export const ProjectPreviewModal = ({
  project,
  onClose,
}: ProjectPreviewModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!project) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${project.title}`}
        >
          <motion.div
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-surface/80 text-muted backdrop-blur-sm transition-colors hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <HiXMark className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto">
              {(() => {
                const projectUrl = project.liveUrl ?? project.githubUrl;

                const imageContent = project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-surface-hover" />
                );

                const imageContainer = (
                  <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-80">
                    {imageContent}
                    <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover/image:bg-foreground/10" aria-hidden />
                  </div>
                );

                if (!projectUrl) return imageContainer;

                return (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/image block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                    aria-label={`Open ${project.title} in new tab`}
                  >
                    {imageContainer}
                  </a>
                );
              })()}

              <div className="flex flex-col gap-5 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {project.title}
                </h2>

                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-surface-hover px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <Button
                      href={project.liveUrl}
                      external
                      variant="ghost"
                      size="sm"
                      className="!px-0"
                    >
                      <HiArrowTopRightOnSquare className="h-4 w-4" />
                      Live demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      external
                      variant="ghost"
                      size="sm"
                      className="!px-0"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
