import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import image from "../../assets/img/IMG_6545.JPG";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ background: "linear-gradient(160deg, #0d1117 0%, #0f0e1a 50%, #0d1117 100%)" }}
    >
      {/* subtle background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6d28d9 0%, transparent 70%)" }}
        />
        <div
          className="orb-2 absolute bottom-1/3 left-1/5 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
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
              I build production-ready, scalable web applications using the MERN stack. Currently
              contributing to live SaaS platforms used by practitioners worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary w-full sm:w-auto justify-center"
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
                className="btn-outline w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
              </motion.a>
              <motion.a
                href={`${import.meta.env.BASE_URL}Karan_Garale_MERN_Developer.pdf`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline w-full sm:w-auto justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
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
              <span className="text-sm" style={{ color: "#484f58" }}>
                Find me on
              </span>
              {[
                {
                  href: "https://github.com/karangarle",
                  label: "GitHub",
                  d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.754-1.335-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.42-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013-.405c1.02.005 2.045.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.807 5.624-5.48 5.922.43.37.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.288 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z",
                },
                {
                  href: "https://www.linkedin.com/in/karan-garale-779832256",
                  label: "LinkedIn",
                  d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8h4.54v16H.23V8zm7.23 0h4.36v2.2h.06c.61-1.16 2.1-2.4 4.32-2.4 4.62 0 5.48 3.05 5.48 7v8.2h-4.55v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.84v7.38H7.46V8z",
                },
                {
                  href: "mailto:karan.garale.tech@gmail.com",
                  label: "Email",
                  d: "M12 12.713l-11.99-8.713h23.98l-11.99 8.713zm0 2.574l-12-8.713v13.426h24v-13.426l-12 8.713z",
                },
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
              <div
                className="absolute -inset-1 rounded-2xl opacity-70"
                style={{
                  background: "linear-gradient(135deg, #6d28d9, #0ea5e9)",
                  borderRadius: "24px",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="relative w-64 h-[290px] sm:w-80 sm:h-[400px] xl:w-96 xl:h-[460px] rounded-2xl overflow-hidden"
                style={{ border: "2px solid #21262d", borderRadius: "22px" }}
              >
                <img
                  src={image}
                  alt="Karan Garale — MERN Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
                {/* overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(13,17,23,0.95) 20%, transparent)" }}
                />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-center z-10">
                  <p className="text-white font-bold text-base sm:text-lg leading-tight">Karan Garale</p>
                  <p className="text-xs sm:text-sm font-medium" style={{ color: "#a78bfa" }}>
                    MERN Stack Developer
                  </p>
                </div>
              </div>
              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 surface rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 text-center shadow-xl backdrop-blur-md z-20"
                style={{ border: "1px solid #30363d", minWidth: "75px" }}
              >
                <p className="text-lg sm:text-2xl font-black gradient-text">2+</p>
                <p className="text-[9px] sm:text-xs font-semibold" style={{ color: "#8b949e" }}>
                  Years Exp.
                </p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-6 sm:-bottom-5 sm:-left-8 surface rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 text-center shadow-2xl backdrop-blur-md z-20"
                style={{ border: "1px solid #30363d", minWidth: "75px" }}
              >
                <p className="text-lg sm:text-2xl font-black gradient-text">10+</p>
                <p className="text-[9px] sm:text-xs font-semibold" style={{ color: "#8b949e" }}>
                  Projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
