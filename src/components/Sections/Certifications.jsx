import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";
import { RevealGroup, scaleIn } from "../UI/Reveal";

export default function Certifications() {
  return (
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
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)" }}
              >
                {icon}
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">{title}</h4>
                <p className="text-sm" style={{ color: "#a78bfa" }}>
                  {issuer}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#484f58" }}>
                  {year}
                </p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
