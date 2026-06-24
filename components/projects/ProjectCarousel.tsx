"use client";

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { ProjectSlide } from "@/components/projects/ProjectSlide";
import { ProjectPreviewModal } from "@/components/projects/ProjectPreviewModal";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 5000;
const INACTIVITY_RESUME_DELAY = 5000;

type EmblaApi = NonNullable<UseEmblaCarouselType[1]>;

type ProjectCarouselProps = {
  projects: Project[];
};

type CarouselAutoplayController = {
  plugin: ReturnType<typeof Autoplay>;
  pause: () => void;
  scheduleResume: () => void;
  bindDragHandlers: (emblaApi: EmblaApi) => () => void;
  destroy: () => void;
};

function createAutoplayController(
  autoplayDelay: number,
  inactivityDelay: number,
): CarouselAutoplayController {
  const plugin = Autoplay({
    delay: autoplayDelay,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    playOnInit: true,
  });

  let inactivityTimer: ReturnType<typeof setTimeout> | null = null;

  const clearInactivityTimer = () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
      inactivityTimer = null;
    }
  };

  const pause = () => {
    clearInactivityTimer();
    plugin.stop();
  };

  const scheduleResume = () => {
    clearInactivityTimer();
    inactivityTimer = setTimeout(() => {
      inactivityTimer = null;
      plugin.play();
    }, inactivityDelay);
  };

  const bindDragHandlers = (emblaApi: EmblaApi) => {
    const onPointerDown = () => pause();
    const onPointerUp = () => scheduleResume();

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  };

  const destroy = () => {
    clearInactivityTimer();
  };

  return { plugin, pause, scheduleResume, bindDragHandlers, destroy };
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const autoplay = useRef(
    createAutoplayController(AUTOPLAY_DELAY, INACTIVITY_RESUME_DELAY),
  ).current;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, duration: 30 },
    [autoplay.plugin],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const unbindDragHandlers = autoplay.bindDragHandlers(emblaApi);

    return () => {
      unbindDragHandlers();
      autoplay.destroy();
    };
  }, [emblaApi, autoplay]);

  const navigate = useCallback(
    (action: () => void) => {
      if (!emblaApi) return;
      autoplay.pause();
      action();
      autoplay.scheduleResume();
    },
    [emblaApi, autoplay],
  );

  const scrollPrev = useCallback(() => {
    navigate(() => emblaApi!.scrollPrev());
  }, [navigate, emblaApi]);

  const scrollNext = useCallback(() => {
    navigate(() => emblaApi!.scrollNext());
  }, [navigate, emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      navigate(() => emblaApi!.scrollTo(index));
    },
    [navigate, emblaApi],
  );

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-0 flex-[0_0_100%] px-1 sm:px-2"
            >
              <ProjectSlide project={project} onPreview={setSelectedProject} />
            </div>
          ))}
        </div>
      </div>

      <CarouselButton
        direction="prev"
        onClick={scrollPrev}
        className="left-0 -translate-x-1/2 sm:-translate-x-0 sm:left-2 md:-left-4 lg:-left-14"
        label="Previous project"
      />
      <CarouselButton
        direction="next"
        onClick={scrollNext}
        className="right-0 translate-x-1/2 sm:translate-x-0 sm:right-2 md:-right-4 lg:-right-14"
        label="Next project"
      />

      <div
        className="mt-6 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Project slides"
      >
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`Go to project ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              index === selectedIndex
                ? "w-7 bg-accent"
                : "w-2.5 bg-border hover:bg-muted",
            )}
          />
        ))}
      </div>

      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

type CarouselButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
  label: string;
};

const CarouselButton = ({
  direction,
  onClick,
  className,
  label,
}: CarouselButtonProps) => {
  const Icon = direction === "prev" ? HiChevronLeft : HiChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "absolute top-[calc(50%-2rem)] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-md transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 sm:h-11 sm:w-11",
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  );
};
