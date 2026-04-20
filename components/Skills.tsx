import Container from "@/components/Container";

const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Framer Motion",
  "Vercel",
];

const Skills = () => {
  return (
    <Container id="skills" className="py-20 sm:py-24 md:py-32 lg:py-36">
      <div className="space-y-6 sm:space-y-8">
        <p className="text-xs font-medium tracking-widest uppercase text-(--primary)">
          Skills
        </p>
        <h2 className="text-[1.45rem] leading-tight font-semibold sm:text-[1.6rem] md:text-[1.75rem] text-(--on-surface)">
          Technical stack for polished, production-grade products.
        </h2>
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-lg px-3 py-2 sm:px-4 text-xs font-medium
                bg-(--surface-container-high)
                text-(--on-surface-variant)
                border border-(--outline-variant)/30
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
