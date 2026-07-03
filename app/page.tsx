import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-gray-800/60 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} Asilbek Boysoatov. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with{" "}
            <span className="text-violet-500">Next.js</span> &{" "}
            <span className="text-violet-500">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </>
  );
}
