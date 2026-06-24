import { HashlessScroll } from "@/components/common/HashlessScroll";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
// import { Testimonials } from "@/components/sections/Testimonials";

const HomePage = () => (
  <>
    <HashlessScroll />
    <Navbar />
    <main id="main-content" tabIndex={-1} className="outline-none">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
    </main>
    <ScrollToTop />
    <Footer />
  </>
);

export default HomePage;
