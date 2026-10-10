import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";
import { Reveal, fadeLeft, fadeRight } from "../UI/Reveal";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
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
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#484f58" }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="text-sm hover:text-violet-300 transition-colors truncate block"
                        style={{ color: "#c9d1d9" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "#c9d1d9" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* ─ Form ─ */}
          <Reveal variant={fadeRight}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
