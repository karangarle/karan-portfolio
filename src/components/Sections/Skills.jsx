import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "../UI/SectionHeader";
import { RevealGroup, fadeUp } from "../UI/Reveal";
import { SKILLS } from "../../data/portfolioData";

export default function Skills() {
  return (
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
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: color + "18", border: `1px solid ${color}30` }}
                >
                  <Icon icon={icon} className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <p className="text-white font-bold text-base">{cat}</p>
                  <p className="text-xs" style={{ color: "#484f58" }}>
                    {items.length} skills
                  </p>
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
  );
}
