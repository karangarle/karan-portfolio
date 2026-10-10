import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";
import { Reveal, fadeLeft, fadeRight } from "../UI/Reveal";
import { EXPERIENCES } from "../../data/portfolioData";

export default function Experience() {
  return (
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
                  <div className={`relative flex flex-col md:flex-row items-start gap-0 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                    {/* Mobile Dot (only visible on mobile, absolute left-0) */}
                    <div className="md:hidden absolute left-0 flex-shrink-0 w-10 flex justify-center z-10 top-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 500 }}
                        className="relative w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: typeColor, boxShadow: `0 0 0 3px #0d1117, 0 0 0 5px ${typeColor}40` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                      </motion.div>
                    </div>

                    {/* Card side */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-10" : "md:pl-10"} pl-10 md:pl-0`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="surface rounded-2xl p-5 sm:p-7"
                        style={{ transition: "all 0.3s ease" }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                          <div>
                            <h4 className="text-white font-bold text-base sm:text-lg mb-0.5">{title}</h4>
                            <p className="text-xs sm:text-sm font-semibold" style={{ color: typeColor }}>
                              {company}
                            </p>
                            <p className="text-xs mt-1" style={{ color: "#484f58" }}>
                              {period}
                            </p>
                          </div>
                          <span
                            className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                            style={{ color: typeColor, background: typeBg, border: `1px solid ${typeColor}30` }}
                          >
                            {type}
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {points.map((p, pi) => (
                            <li key={pi} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed" style={{ color: "#8b949e" }}>
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: typeColor }} />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Desktop Dot (only visible on desktop, centered in middle flex) */}
                    <div className="hidden md:flex flex-shrink-0 w-16 justify-center z-10 mt-6">
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

                    {/* empty spacer for desktop */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
