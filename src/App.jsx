import React, { useState, useEffect, useRef, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import image from "./assets/img/IMG_6545.JPG";

/* ═══════════════════════════════════════════
   ANIMATION VARIANTS
═══════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: "backOut" },
  }),
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ═══════════════════════════════════════════
   SECTION WRAPPER — triggers animation on scroll
═══════════════════════════════════════════ */
function Reveal({ children, variant = fadeUp, custom = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variant}
      custom={custom}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

function RevealGroup({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════ */
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 50;
    const inc = to / steps;
    const id = setInterval(() => {
      start += inc;
      if (start >= to) { setCount(to); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 1200 / steps);
    return () => clearInterval(id);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   3D TILT CARD
═══════════════════════════════════════════ */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }, [x, y]);
  const onLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SECTION HEADING COMPONENT
═══════════════════════════════════════════ */
function SectionHeader({ badge, title, subtitle }) {
  return (
    <Reveal className="text-center mb-14">
      <span className="section-badge">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        {badge}
      </span>
      <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8b949e] text-base sm:text-lg max-w-xl mx-auto">{subtitle}</p>
      )}
    </Reveal>
  );
}

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const NAV_LINKS = [
  { id: "home", label: "Home" }, { id: "about", label: "About" },
  { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" }, { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" }, { id: "contact", label: "Contact" },
];

const SKILLS = [
  { cat: "Frontend", color: "#a78bfa", icon: "⚛️", items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"] },
  { cat: "Backend", color: "#38bdf8", icon: "⚙️", items: ["Node.js", "Express.js", "REST APIs", "Apollo GraphQL"] },
  { cat: "Database", color: "#34d399", icon: "🗄️", items: ["MongoDB", "MySQL", "Redux", "Context API"] },
  { cat: "DevTools", color: "#fb923c", icon: "🛠️", items: ["Git", "GitLab", "Postman", "VS Code", "Fetch/Axios"] },
];

const EXPERIENCES = [
  {
    title: "MERN Stack Developer",
    company: "TechErudite",
    period: "Sep 2025 – Present",
    type: "Full-Time",
    typeColor: "#a78bfa",
    typeBg: "rgba(109,40,217,0.12)",
    points: [
      "Developed and optimized modules for Faces Consent, a live SaaS platform used by aesthetic clinics for digital consent forms, appointment booking, team management, and client records.",
      "Built reusable React.js components for practitioner dashboards, booking flows, and role-based admin panels.",
      "Integrated and optimized Node.js REST APIs to support real-time data handling across web and mobile clients.",
      "Collaborated in an agile team to ship feature updates, resolve bugs, and maintain production code quality.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "MKS DigiTech",
    period: "Sep 2024 – Sep 2025",
    type: "Full-Time",
    typeColor: "#38bdf8",
    typeBg: "rgba(56,189,248,0.1)",
    points: [
      "Integrated RESTful APIs with Node.js and Express.js, improving API response time by 20%.",
      "Implemented role-based access control and multi-user management to strengthen application security.",
      "Optimized MySQL queries, reducing data retrieval time by 30% and improving overall responsiveness.",
      "Developed reusable React.js components with Redux and Context API for better maintainability.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Hyperlink Infosystem",
    period: "Jan 2024 – Jul 2024",
    type: "Internship",
    typeColor: "#34d399",
    typeBg: "rgba(52,211,153,0.1)",
    points: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript, Bootstrap, and jQuery.",
      "Developed React.js components integrated with Node.js APIs for data-driven applications.",
      "Collaborated with the development team to debug, test, and optimize application performance.",
    ],
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "Faces Consent",
    subtitle: "Clinic Management SaaS Platform",
    description:
      "A production SaaS platform serving aesthetic practitioners worldwide for managing digital consent forms, client bookings, prescriptions, team roles, and in-app payments. Handles real-time data across web and mobile clients.",
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "MySQL"],
    link: "https://facesconsent.com",
    linkLabel: "View Live Site",
    accentColor: "#a78bfa",
    accentBg: "rgba(109,40,217,0.06)",
    icon: "🏥",
  },
  {
    num: "02",
    title: "O'TerRi Laundry System",
    subtitle: "Multi-Panel Management Platform",
    description:
      "A multi-panel laundry management system for Styler, Exhibitor, and Admin roles with role-based routing, real-time order tracking, secure MySQL authentication, and user interaction modules.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    link: "https://play.google.com/store/apps/details?id=com.mksoterri.app",
    linkLabel: "View on Play Store",
    accentColor: "#38bdf8",
    accentBg: "rgba(56,189,248,0.06)",
    icon: "🧺",
  },
];

/* ═══════════════════════════════════════════
   APP
═══════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(null), 5000);
  };

  /* ─────────────────────────────── */
  return (
    <div style={{ background: "#0d1117", color: "#c9d1d9", minHeight: "100vh" }}>

      {/* ══════════ NAVBAR ══════════ */}
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
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}Karan_Garale_Resume_01-08.pdf`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex btn-primary text-sm px-5 py-2"
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
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ══════════ HERO ══════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
        style={{ background: "linear-gradient(160deg, #0d1117 0%, #0f0e1a 50%, #0d1117 100%)" }}
      >
        {/* subtle background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #6d28d9 0%, transparent 70%)" }} />
          <div className="orb-2 absolute bottom-1/3 left-1/5 w-[400px] h-[400px] rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)" }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Text ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="relative flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ping absolute w-2.5 h-2.5 rounded-full bg-green-400 opacity-50" />
                </div>
                <span className="text-sm font-medium" style={{ color: "#8b949e" }}>
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-5"
              >
                <span style={{ color: "#f0f6fc" }}>Karan</span>{" "}
                <span className="gradient-text">Garale</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-xl sm:text-2xl font-semibold mb-5"
                style={{ color: "#8b949e" }}
              >
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "React & Node.js Engineer",
                    2000,
                    "Full-Stack Web Developer",
                    2000,
                    "Scalable App Builder",
                    2000,
                  ]}
                  speed={55}
                  wrapper="span"
                  style={{ color: "#a78bfa" }}
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
                style={{ color: "#6e7681" }}
              >
                I build production-ready, scalable web applications using the MERN stack.
                Currently contributing to live SaaS platforms used by practitioners worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn-outline"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Talk
                </motion.a>
                <motion.a
                  href={`${import.meta.env.BASE_URL}Karan_Garale_Resume_01-08.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </motion.a>
              </motion.div>

              {/* Divider + social */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-5 mt-10 pt-8"
                style={{ borderTop: "1px solid #21262d" }}
              >
                <span className="text-sm" style={{ color: "#484f58" }}>Find me on</span>
                {[
                  { href: "https://github.com/karangarle", label: "GitHub", d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.754-1.335-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.42-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013-.405c1.02.005 2.045.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.807 5.624-5.48 5.922.43.37.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.288 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" },
                  { href: "https://www.linkedin.com/in/karan-garale-779832256", label: "LinkedIn", d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8h4.54v16H.23V8zm7.23 0h4.36v2.2h.06c.61-1.16 2.1-2.4 4.32-2.4 4.62 0 5.48 3.05 5.48 7v8.2h-4.55v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.84v7.38H7.46V8z" },
                  { href: "mailto:karan.garale.tech@gmail.com", label: "Email", d: "M12 12.713l-11.99-8.713h23.98l-11.99 8.713zm0 2.574l-12-8.713v13.426h24v-13.426l-12 8.713z" },
                ].map(({ href, label, d }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, color: "#a78bfa" }}
                    style={{ color: "#484f58", transition: "color 0.2s" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={d} />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Profile Image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Gradient ring */}
                <div className="absolute -inset-1 rounded-2xl opacity-70"
                  style={{ background: "linear-gradient(135deg, #6d28d9, #0ea5e9)", borderRadius: "24px", filter: "blur(2px)" }} />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden"
                  style={{ border: "2px solid #21262d", borderRadius: "22px" }}>
                  <img
                    src={image}
                    alt="Karan Garale — MERN Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  {/* overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3"
                    style={{ background: "linear-gradient(to top, rgba(13,17,23,0.9), transparent)" }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg leading-tight">Karan Garale</p>
                    <p className="text-sm" style={{ color: "#a78bfa" }}>MERN Stack Developer</p>
                  </div>
                </div>
                {/* Floating stat */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-5 surface rounded-2xl px-4 py-3 text-center shadow-xl"
                  style={{ border: "1px solid #30363d", minWidth: "90px" }}
                >
                  <p className="text-2xl font-black gradient-text">2+</p>
                  <p className="text-xs" style={{ color: "#8b949e" }}>Years Exp.</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-5 -left-5 surface rounded-2xl px-4 py-3 text-center shadow-xl"
                  style={{ border: "1px solid #30363d", minWidth: "90px" }}
                >
                  <p className="text-2xl font-black gradient-text">10+</p>
                  <p className="text-xs" style={{ color: "#8b949e" }}>Projects</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="py-28 px-6" style={{ background: "#0a0d12" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="About Me"
            title="Who I Am"
            subtitle="A passionate developer who loves turning ideas into production-ready applications."
          />
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <Reveal variant={fadeLeft} className="lg:col-span-3">
              <div className="space-y-5" style={{ color: "#8b949e", lineHeight: 1.8, fontSize: "1.05rem" }}>
                <p>
                  I'm a <span style={{ color: "#a78bfa", fontWeight: 600 }}>MERN Stack Developer</span> with
                  over 2 years of professional experience building scalable, high-performance web applications.
                  I love working across the full stack — from crafting smooth React UIs to designing
                  efficient Node.js APIs and database architectures.
                </p>
                <p>
                  Currently at <span style={{ color: "#f0f6fc", fontWeight: 600 }}>TechErudite</span>, I contribute
                  to <span style={{ color: "#38bdf8" }}>Faces Consent</span> — a live SaaS platform serving aesthetic
                  clinics globally. I'm driven by clean code, great developer experience, and shipping products people love.
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <RevealGroup className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { n: 2, s: "+", label: "Years Experience", icon: "⚡" },
                { n: 10, s: "+", label: "Projects Built", icon: "🚀" },
                { n: 3, s: "", label: "Companies", icon: "🏢" },
                { n: 100, s: "%", label: "Commitment", icon: "💪" },
              ].map(({ n, s, label, icon }, i) => (
                <motion.div key={label} variants={scaleIn} custom={i} className="stat-card">
                  <div className="text-2xl mb-2">{icon}</div>
                  <p className="text-3xl font-black gradient-text leading-none mb-1">
                    <Counter to={n} suffix={s} />
                  </p>
                  <p className="text-xs font-medium" style={{ color: "#6e7681" }}>{label}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ══════════ SKILLS ══════════ */}
      <section id="skills" className="py-28 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Skills"
            title="Tech Stack"
            subtitle="Technologies I work with daily to build modern, production-grade applications."
          />
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map(({ cat, color, icon, items }, ci) => (
              <motion.div
                key={cat}
                variants={fadeUp}
                custom={ci}
                whileHover={{ y: -6, borderColor: color + "55" }}
                className="surface rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                style={{ transition: "all 0.3s ease" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid #21262d" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: color + "18", border: `1px solid ${color}30` }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">{cat}</p>
                    <p className="text-xs" style={{ color: "#484f58" }}>{items.length} skills</p>
                  </div>
                </div>
                {/* Skills */}
                <div className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <div key={skill} className="skill-pill">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ══════════ PROJECTS ══════════ */}
      <section id="projects" className="py-28 px-6" style={{ background: "#0a0d12" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Projects"
            title="Featured Work"
            subtitle="Selected projects that showcase my full-stack development capabilities."
          />
          <div className="space-y-8">
            {PROJECTS.map(({ num, title, subtitle, description, tech, link, linkLabel, accentColor, accentBg, icon }, i) => (
              <Reveal key={title} variant={i % 2 === 0 ? fadeLeft : fadeRight}>
                <TiltCard>
                  <motion.div
                    whileHover={{ borderColor: accentColor + "60" }}
                    className="project-card surface rounded-2xl overflow-hidden"
                    style={{ transition: "border-color 0.3s ease" }}
                  >
                    <div className="grid md:grid-cols-5">
                      {/* ─ Left accent ─ */}
                      <div
                        className="md:col-span-1 flex flex-col items-center justify-center py-10 px-4"
                        style={{ background: accentBg, borderRight: `1px solid ${accentColor}20` }}
                      >
                        <div className="text-5xl mb-3">{icon}</div>
                        <p className="text-6xl font-black opacity-10 text-white">{num}</p>
                      </div>
                      {/* ─ Right content ─ */}
                      <div className="md:col-span-4 p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: accentColor }}>
                              {subtitle}
                            </p>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">{title}</h3>
                          </div>
                          <motion.a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05, x: 3 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                            style={{
                              color: accentColor,
                              background: accentColor + "15",
                              border: `1px solid ${accentColor}30`,
                            }}
                          >
                            {linkLabel}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        </div>
                        <p className="leading-relaxed mb-6 text-sm sm:text-base" style={{ color: "#8b949e" }}>
                          {description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tech.map((t) => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EXPERIENCE ══════════ */}
      <section id="experience" className="py-28 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="Experience"
            title="Work History"
            subtitle="My professional journey building real-world products."
          />
          <div className="relative">
            {/* Timeline center line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="timeline-line"
              style={{ position: "absolute", top: 0, bottom: 0, originY: 0 }}
            />

            <div className="relative space-y-12">
              {EXPERIENCES.map(({ title, company, period, type, typeColor, typeBg, points }, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={company} variant={isLeft ? fadeLeft : fadeRight}>
                    <div className={`flex flex-col md:flex-row items-start gap-0 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                      {/* Card side */}
                      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-10" : "md:pl-10"} pl-10 md:pl-0`}>
                        <motion.div
                          whileHover={{ y: -4 }}
                          className="surface rounded-2xl p-6 sm:p-7"
                          style={{ transition: "all 0.3s ease" }}
                        >
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div>
                              <h4 className="text-white font-bold text-lg mb-0.5">{title}</h4>
                              <p className="text-sm font-semibold" style={{ color: typeColor }}>{company}</p>
                              <p className="text-xs mt-1" style={{ color: "#484f58" }}>{period}</p>
                            </div>
                            <span
                              className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                              style={{ color: typeColor, background: typeBg, border: `1px solid ${typeColor}30` }}
                            >
                              {type}
                            </span>
                          </div>
                          <ul className="space-y-2.5">
                            {points.map((p, pi) => (
                              <li key={pi} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#8b949e" }}>
                                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: typeColor }} />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      {/* Timeline dot (center) */}
                      <div className="absolute md:relative left-0 md:left-auto flex-shrink-0 md:w-16 flex justify-center mt-7 md:mt-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 500 }}
                          className="relative w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: typeColor, boxShadow: `0 0 0 4px #0d1117, 0 0 0 6px ${typeColor}40` }}
                        >
                          <span className="w-2 h-2 rounded-full bg-white opacity-80" />
                        </motion.div>
                      </div>

                      {/* empty spacer */}
                      <div className="hidden md:block w-[calc(50%-2rem)]" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EDUCATION ══════════ */}
      <section id="education" className="py-28 px-6" style={{ background: "#0a0d12" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="Education" title="Academic Background" />
          <RevealGroup className="grid sm:grid-cols-2 gap-6">
            {[
              { degree: "Master of Computer Applications", abbr: "MCA", institute: "Dharmsinh Desai University", year: "2022 – 2024", icon: "🎓" },
              { degree: "Bachelor of Computer Applications", abbr: "BCA", institute: "MKBU University", year: "2019 – 2022", icon: "📚" },
            ].map(({ degree, abbr, institute, year, icon }, i) => (
              <motion.div
                key={degree}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, borderColor: "#a78bfa55" }}
                className="surface rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: "rgba(109,40,217,0.1)", border: "1px solid rgba(109,40,217,0.2)" }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#a78bfa" }}>{abbr}</p>
                    <h4 className="text-white font-bold text-lg leading-snug mb-2">{degree}</h4>
                    <p className="text-sm font-medium mb-0.5" style={{ color: "#8b949e" }}>{institute}</p>
                    <p className="text-xs" style={{ color: "#484f58" }}>{year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ══════════ CERTIFICATIONS ══════════ */}
      <section id="certifications" className="py-28 px-6" style={{ background: "#0d1117" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="Certifications" title="Credentials" />
          <RevealGroup className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Full Stack Developer Internship", issuer: "Hyperlink Infosystem", icon: "🏆", year: "2024" },
              { title: "MERN Stack Live Projects", issuer: "MKS DigiTech LLP", icon: "🎖️", year: "2024–2025" },
            ].map(({ title, issuer, icon, year }, i) => (
              <motion.div
                key={title}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -5, borderColor: "#38bdf855" }}
                className="surface rounded-2xl p-6 transition-all duration-300 hover:shadow-xl flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)" }}>
                  {icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{title}</h4>
                  <p className="text-sm" style={{ color: "#a78bfa" }}>{issuer}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#484f58" }}>{year}</p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" className="py-28 px-6" style={{ background: "#0a0d12" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Contact"
            title="Let's Work Together"
            subtitle="Have a project in mind? I'm always open to discussing new opportunities."
          />
          <div className="grid lg:grid-cols-2 gap-10">

            {/* ─ Info ─ */}
            <Reveal variant={fadeLeft}>
              <div className="space-y-4">
                {[
                  { icon: "✉️", label: "Primary Email", value: "karan.garale.tech@gmail.com", href: "mailto:karan.garale.tech@gmail.com" },
                  { icon: "📧", label: "Secondary Email", value: "karangarale123@gmail.com", href: "mailto:karangarale123@gmail.com" },
                  { icon: "📱", label: "Phone", value: "+91-7048152544" },
                  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/karan-garale-779832256", href: "https://www.linkedin.com/in/karan-garale-779832256" },
                  { icon: "🐙", label: "GitHub", value: "github.com/karangarle", href: "https://github.com/karangarle" },
                ].map(({ icon, label, value, href }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 6, borderColor: "#6d28d944" }}
                    className="surface rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-200"
                  >
                    <span className="text-2xl">{icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#484f58" }}>{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                          className="text-sm hover:text-violet-300 transition-colors truncate block"
                          style={{ color: "#c9d1d9" }}>{value}</a>
                      ) : (
                        <p className="text-sm" style={{ color: "#c9d1d9" }}>{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* ─ Form ─ */}
            <Reveal variant={fadeRight}>
              <div className="surface rounded-2xl p-8">
                <h4 className="text-white font-bold text-xl mb-6">Send a Message</h4>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#484f58" }}>Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#484f58" }}>Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#484f58" }}>Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="form-input resize-none"
                    />
                  </div>

                  <AnimatePresence>
                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium"
                        style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", color: "#34d399" }}
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Message sent! I'll get back to you soon.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </motion.button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-10 px-6" style={{ background: "#080b10", borderTop: "1px solid #21262d" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm">
              KG
            </div>
            <div>
              <p className="text-white font-bold leading-none">Karan Garale</p>
              <p className="text-xs" style={{ color: "#484f58" }}>MERN Stack Developer</p>
            </div>
          </div>

          <p className="text-sm" style={{ color: "#484f58" }}>
            © {new Date().getFullYear()} Karan Garale · All rights reserved
          </p>

          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/karangarle", label: "GitHub", d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.754-1.335-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.42-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013-.405c1.02.005 2.045.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.807 5.624-5.48 5.922.43.37.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.288 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" },
              { href: "https://www.linkedin.com/in/karan-garale-779832256", label: "LinkedIn", d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8h4.54v16H.23V8zm7.23 0h4.36v2.2h.06c.61-1.16 2.1-2.4 4.32-2.4 4.62 0 5.48 3.05 5.48 7v8.2h-4.55v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.84v7.38H7.46V8z" },
              { href: "mailto:karan.garale.tech@gmail.com", label: "Email", d: "M12 12.713l-11.99-8.713h23.98l-11.99 8.713zm0 2.574l-12-8.713v13.426h24v-13.426l-12 8.713z" },
            ].map(({ href, label, d }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, color: "#a78bfa" }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                style={{ color: "#484f58", border: "1px solid #21262d" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={d} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </footer>

      {/* ══════════ BACK TO TOP ══════════ */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-xl z-50 flex items-center justify-center"
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
