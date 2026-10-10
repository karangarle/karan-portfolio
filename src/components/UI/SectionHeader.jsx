import { Reveal } from "./Reveal";

export default function SectionHeader({ badge, title, subtitle }) {
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
