import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import Certifications from "./components/Sections/Certifications";
import Contact from "./components/Sections/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.25 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.querySelectorAll("section[id]").forEach((s) => obs.unobserve(s));
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden" style={{ background: "#0d1117", color: "#c9d1d9", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back To Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-xl z-50 flex items-center justify-center cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #6d28d9, #4f46e5)",
              boxShadow: "0 8px 30px rgba(109,40,217,0.4)",
            }}
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
