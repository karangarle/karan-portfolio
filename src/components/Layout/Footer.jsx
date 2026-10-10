export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: "#080b10", borderTop: "1px solid #21262d" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm">
            KG
          </div>
          <div>
            <p className="text-white font-bold text-sm">Karan Garale</p>
            <p className="text-xs" style={{ color: "#484f58" }}>MERN Stack Developer</p>
          </div>
        </div>
        <p className="text-xs text-center" style={{ color: "#484f58" }}>
          © {new Date().getFullYear()} Karan Garale. Crafted with React & Tailwind CSS.
        </p>
        <a
          href="#home"
          className="p-2.5 rounded-xl transition-colors"
          style={{ background: "#161b22", border: "1px solid #30363d", color: "#8b949e" }}
          aria-label="Back to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
