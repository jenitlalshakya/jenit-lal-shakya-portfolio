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
        <p className="text-xs font-medium tracking-widest text-[#adc6ff] uppercase">
          Skills
        </p>
        <h2 className="text-[1.45rem] leading-tight font-semibold text-[#e5e2e1] sm:text-[1.6rem] md:text-[1.75rem]">
          Technical stack for polished, production-grade products.
        </h2>
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-[#353534] px-3 py-2 text-xs font-medium text-[#c2c6d6] sm:px-4"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Skills;
