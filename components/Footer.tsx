import Container from "@/components/Container";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container className="pb-12 sm:pb-16 md:pb-20">
      <footer className="flex flex-col gap-3 text-sm text-[#c2c6d6] md:flex-row md:items-center md:justify-between">
        <p className="text-center md:text-left text-[#a0a4b8]">
          © {year} Jenit Lal Shakya. All rights reserved.
        </p>
        <p className="text-center md:text-right text-[#c2c6d6] italic">
          Designed and engineered with tonal depth and precision
        </p>
      </footer>
    </Container>
  )
}

export default Footer;
