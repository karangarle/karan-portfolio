import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: "#080b10", borderTop: "1px solid #21262d" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm">
            KG
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Karan Garale</p>
            <p className="text-xs font-medium" style={{ color: "#8b949e" }}>MERN Stack Developer</p>
          </div>
        </div>

        {/* Center: Copyright */}
        <p className="text-xs sm:text-sm text-center font-medium" style={{ color: "#8b949e" }}>
          © {new Date().getFullYear()} Karan Garale · Crafted with React & Tailwind CSS
        </p>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/karangarle", label: "GitHub", icon: "lucide:github" },
            { href: "https://www.linkedin.com/in/karan-garale-779832256", label: "LinkedIn", icon: "lucide:linkedin" },
            { href: "mailto:karan.garale.tech@gmail.com", label: "Email", icon: "lucide:mail" },
          ].map(({ href, label, icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, color: "#a78bfa" }}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all surface hover:border-violet-500/50"
              style={{ color: "#8b949e" }}
            >
              <Icon icon={icon} className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
