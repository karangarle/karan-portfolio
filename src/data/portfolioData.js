export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { cat: "Frontend", color: "#a78bfa", icon: "⚛️", items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"] },
  { cat: "Backend", color: "#38bdf8", icon: "⚙️", items: ["Node.js", "Express.js", "REST APIs", "Apollo GraphQL"] },
  { cat: "Database", color: "#34d399", icon: "🗄️", items: ["MongoDB", "MySQL", "Redux", "Context API"] },
  { cat: "DevTools", color: "#fb923c", icon: "🛠️", items: ["Git", "GitLab", "Postman", "VS Code", "Fetch/Axios"] },
];

export const EXPERIENCES = [
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

export const PROJECTS = [
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
