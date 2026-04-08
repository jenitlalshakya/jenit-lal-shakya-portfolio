import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SwipeUpIcon from "@/components/SwipeUpIcon";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip pb-10 sm:pb-12">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SwipeUpIcon />
    </main>
  );
}
