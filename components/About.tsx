import Container from "@/components/Container";

const About = () => {
  return (
    <Container id="about" className="py-20 sm:py-24 md:py-32 lg:py-36">
      <div className="max-w-4xl space-y-6 sm:space-y-8">
        <p className="text-xs font-medium tracking-widest text-[#adc6ff] uppercase">
          About
        </p>
        <h2 className="text-[1.45rem] leading-tight font-semibold text-[#e5e2e1] sm:text-[1.6rem] md:text-[1.75rem]">
          A techical craft driven by clarity, depth, and premium interaction.
        </h2>
        <p className="text-sm leading-7 text[#c2c6d6] sm:text-base sm:leading-8">
          I specialize in architecting performant web experiences where structure
          and aesthetics work in harmony. Every interface is shaped with careful
          spacing, tonal layering, and motion that feels intentional at every
          breakpoint.
        </p>
      </div>
    </Container>
  );
}

export default About;
