import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "../UI/SectionHeader";
import TiltCard from "../UI/TiltCard";
import { Reveal, fadeLeft, fadeRight } from "../UI/Reveal";
import { PROJECTS } from "../../data/portfolioData";

export default function Projects() {
  return (
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
                  whileHover={{ y: -4, borderColor: accentColor + "60" }}
                  className="project-card surface rounded-2xl overflow-hidden transition-all duration-300 ease-out"
                >
                  <div className="grid md:grid-cols-5">
                    {/* ─ Left accent ─ */}
                    <div
                      className="md:col-span-1 flex flex-col items-center justify-center py-10 px-4"
                      style={{ background: accentBg, borderRight: `1px solid ${accentColor}20` }}
                    >
                      <div className="mb-3">
                        <Icon icon={icon} className="w-12 h-12" style={{ color: accentColor }} />
                      </div>
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
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
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
  );
}
