// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import SwipeUpIcon from "@/components/SwipeUpIcon";

// export default function Home() {
//   return (
//     <main className="min-h-screen overflow-x-clip pb-10 sm:pb-12">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//       <SwipeUpIcon />
//     </main>
//   );
// }


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0f1f] text-white px-6">
      <div className="text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">
          🚧 Portfolio Under Maintenance
        </h1>

        <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
          I'm currently updating my portfolio to make it better.
          Please check back soon.
        </p>

        <div className="text-xs text-gray-500">
          — Jenit Lal Shakya
        </div>
      </div>
    </main>
  );
}
