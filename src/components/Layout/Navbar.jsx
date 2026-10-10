import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../data/portfolioData";

export default function Navbar({ activeSection, menuOpen, setMenuOpen }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="nav-blur fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm">
            KG
          </div>
          <span className="text-white font-bold text-lg hidden sm:block">
            Karan <span style={{ color: "#6d28d9" }}>Garale</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                color: activeSection === id ? "#a78bfa" : "#8b949e",
                background: activeSection === id ? "rgba(109,40,217,0.12)" : "transparent",
                border: activeSection === id ? "1px solid rgba(109,40,217,0.25)" : "1px solid transparent",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Resume + Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`${import.meta.env.BASE_URL}Karan_Garale_Full_Stack_Developer.pdf`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex btn-primary text-sm px-4 py-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Resume
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition"
            style={{ color: "#8b949e", background: "rgba(255,255,255,0.05)" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ borderTop: "1px solid #21262d", overflow: "hidden" }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium"
                  style={{
                    color: activeSection === id ? "#a78bfa" : "#8b949e",
                    background: activeSection === id ? "rgba(109,40,217,0.1)" : "transparent",
                  }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href={`${import.meta.env.BASE_URL}Karan_Garale_Full_Stack_Developer.pdf`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-sm px-5 py-3 mt-2 justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
