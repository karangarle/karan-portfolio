import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";
import { Reveal, RevealGroup, fadeLeft, scaleIn } from "../UI/Reveal";
import Counter from "../UI/Counter";

export default function About() {
  return (
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
                I'm a <span style={{ color: "#a78bfa", fontWeight: 600 }}>MERN Stack Developer</span> with over 2 years of professional experience building scalable, high-performance web applications. I love working across the full stack — from crafting smooth React UIs to designing efficient Node.js APIs and database architectures.
              </p>
              <p>
                Currently at <span style={{ color: "#f0f6fc", fontWeight: 600 }}>TechErudite</span>, I contribute to <span style={{ color: "#38bdf8" }}>Faces Consent</span> — a live SaaS platform serving aesthetic clinics globally. I'm driven by clean code, great developer experience, and shipping products people love.
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
                <p className="text-xs font-medium" style={{ color: "#6e7681" }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
