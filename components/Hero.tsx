// import Link from "next/link";
"use client";
import Image from "next/image";
import Container from "@/components/Container";
import me from "@/public/images/me.png";

const Hero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });

      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <Container
      id="home"
      className="pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-32 md:pb-32 lg:pb-40"
    >
      <div className="grid items-center grid-cols-1 gap-10 md:gap-12 lg:grid-cols-5">
        <div className="space-y-6 sm:space-y-8 lg:col-span-3">
          <h1 className="max-w-4xl text-[2rem] leading-[1.08] font-bold tracking-tight text-[#e5e2e1] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.5rem]">
            Hi, I'm Jenit Lal Shakya
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-[#c2c6d6] sm:text-base sm:leading-8 md:text-lg">
            Full-stack developer. Premium UI. Scalable systems.
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              onClick={() => handleScroll("projects")}
              className="primary-gradient inline-flex w-full justify-center rounded-[3rem] px-6 py-3 text-sm font-semibold text-[#131313] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_20px_rgba(10,22,46,0.6)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(127,174,255,0.3),0_0_30px_rgba(77,142,255,0.5)] sm:w-auto sm:px-8"              style={{ cursor: "pointer" }}
            >
              Explore Projects
            </a>

            <a
              onClick={() => handleScroll("contact")}
              className="inline-flex w-full justify-center rounded-[3rem] px-6 py-3 text-sm font-semibold text-[#dbe7ff] border border-[#4d8eff]/60 bg-linear-to-r from-[#1b2a48]/90 to-[#14213f]/90 shadow-[0_0_0_1px_rgba(77,142,255,0.12),0_8px_20px_rgba(10,22,46,0.6)] transition-all duration-300 hover:border-[#7faeff] hover:text-[#f2f6ff] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(127,174,255,0.3),0_0_24px_rgba(77,142,255,0.3)] sm:w-auto sm:px-8"
              style={{ cursor: "pointer" }}
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="hidden lg:col-span-2 lg:flex lg:justify-end">
          {/* <div className="w-100 h-100 relative rounded-3xl overflow-hidden mx-auto shadow-[0_0_20px_rgba(77,142,255,0.6), 0_0_40px_rgba(77,142,255,0.4)]"> */}
          <div className="relative w-[400px] h-[400px] translate-y-[-70px]">
            <Image
              src={me}
              alt="Jenit Lal Shakya"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              loading="eager"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero;
