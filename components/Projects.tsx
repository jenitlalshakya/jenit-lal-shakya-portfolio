import Image from "next/image";
import Container from "@/components/Container";

const projects = [
  {
    title: "Performance Dashboard",
    description:
      "Real-time analytics platform with enterprise-grade filtering, charting, and collaboration workflows.",
    image: "/globe.svg",
    tags: ["Next.js", "WebSockets", "Data Viz"],
  },
  {
    title: "Developer Workspace",
    description:
      "Command-focused productivity suite designed for engineering teams shipping across fast release cycles.",
    image: "/window.svg",
    tags: ["TypeScript", "Turborepo", "Design System"],
  },
  {
    title: "Deployment Command Center",
    description:
      "Operations control panel built for deployment confidence, observability, and rapid incident response.",
    image: "/vercel.svg",
    tags: ["CI/CD", "Automation", "Cloud"],
  },
];

const Projects = () => {
  return (
    <Container id="projects" className="py-20 sm:py-24 md:py-32 lg:py-36">
      <div className="space-y-6 sm:space-y-8">
        <p className="text-xs font-medium tracking-widest text-[#adc6ff] uppercase">
          Projects
        </p>
        <h2 className="text-[1.45rem] leading-tight font-semibold text-[#e5e2e1] sm:text-[1.6rem] md:text-[1.75rem]">
          Selected work engineered for performance and longevity.
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:gap-8 lg:mt-12 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-4xl bg-[#2a2a2a]/60 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:backdrop-blur-2xl sm:p-8"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={44}
              height={44}
              sizes="(max-width: 640px) 36px, 44px"
              className="mb-6 h-9 w-9 opacity-90 sm:mb-8 sm:h-11 sm:w-11"
            />
            <h3 className="text-[1.2rem] font-medium text-[#e5e2e1] sm:text-[1.375rem]">
              {project.title}
            </h3>
            <p className="mt-5 text-sm leading-7 text-[#c2c6d6] sm:mt-8 sm:text-base sm:leading-8">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-[#353534] px-3 py-1.5 text-xs font-medium text-[#c2c6d6]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}

export default Projects;
