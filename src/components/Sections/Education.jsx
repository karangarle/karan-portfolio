import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "../UI/SectionHeader";
import { RevealGroup, fadeUp } from "../UI/Reveal";

export default function Education() {
  return (
    <section id="education" className="py-28 px-6" style={{ background: "#0a0d12" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="Education" title="Academic Background" />
        <RevealGroup className="grid sm:grid-cols-2 gap-6">
          {[
            { degree: "Master of Computer Applications", abbr: "MCA", institute: "Dharmsinh Desai University", year: "2022 – 2024", icon: "lucide:graduation-cap" },
            { degree: "Bachelor of Computer Applications", abbr: "BCA", institute: "MKBU University", year: "2019 – 2022", icon: "lucide:book-open" },
          ].map(({ degree, abbr, institute, year, icon }, i) => (
            <motion.div
              key={degree}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, borderColor: "#a78bfa55" }}
              className="surface rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(109,40,217,0.1)", border: "1px solid rgba(109,40,217,0.2)" }}
                >
                  <Icon icon={icon} className="w-7 h-7" style={{ color: "#a78bfa" }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#a78bfa" }}>
                    {abbr}
                  </p>
                  <h4 className="text-white font-bold text-lg leading-snug mb-2">{degree}</h4>
                  <p className="text-sm font-medium mb-0.5" style={{ color: "#8b949e" }}>
                    {institute}
                  </p>
                  <p className="text-xs" style={{ color: "#484f58" }}>
                    {year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
