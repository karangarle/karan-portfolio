import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import image from "./assets/img/IMG_6545.JPG";

const SectionFade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTopBtn, setShowTopBtn] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    // Scroll event for "Back to top" button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for Active Links
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="bg-black text-gray-200">
        <header className="fixed w-full bg-black/90 backdrop-blur z-50 border-b border-purple-800">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold text-purple-500">
              Karan's Portfolio
            </h1>

            <nav className="hidden md:flex space-x-6 font-medium">
              <a href="#home" className={`hover:text-purple-400 transition ${activeSection === 'home' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                Home
              </a>
              <a href="#about" className={`hover:text-purple-400 transition ${activeSection === 'about' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                About
              </a>
              <a href="#skills" className={`hover:text-purple-400 transition ${activeSection === 'skills' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                Skills
              </a>
              <a href="#projects" className={`hover:text-purple-400 transition ${activeSection === 'projects' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                Projects
              </a>
              <a href="#experience" className={`hover:text-purple-400 transition ${activeSection === 'experience' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                Experience
              </a>
              <a href="#education" className={`hover:text-purple-400 transition ${activeSection === 'education' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                Education
              </a>
              <a href="#certifications" className={`hover:text-purple-400 transition ${activeSection === 'certifications' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                Certifications
              </a>
              <a href="#contact" className={`hover:text-purple-400 transition ${activeSection === 'contact' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}>
                Contact
              </a>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-purple-400 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`md:hidden bg-black/90 border-t border-purple-700 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <nav className="flex flex-col space-y-2 p-4 text-center">
              <a
                href="#home"
                className={`hover:text-purple-400 transition ${activeSection === 'home' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className={`hover:text-purple-400 transition ${activeSection === 'about' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className={`hover:text-purple-400 transition ${activeSection === 'skills' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className={`hover:text-purple-400 transition ${activeSection === 'projects' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className={`hover:text-purple-400 transition ${activeSection === 'experience' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#education"
                className={`hover:text-purple-400 transition ${activeSection === 'education' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                Education
              </a>
              <a
                href="#certifications"
                className={`hover:text-purple-400 transition ${activeSection === 'certifications' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                Certifications
              </a>
              <a
                href="#contact"
                className={`hover:text-purple-400 transition ${activeSection === 'contact' ? 'text-purple-400 font-bold' : 'text-gray-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-purple-900 to-black text-white px-6 md:px-12 pt-32 md:pt-0"
        >
          <SectionFade delay={0.1}>
            <div className="flex justify-center mb-8 md:mb-0 md:mr-12">
              <img
                src={`${image}`}
                alt="Karan Garale - MERN Stack Developer"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-purple-500 shadow-2xl"
              />
            </div>
          </SectionFade>
          <SectionFade delay={0.3}>
            <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-purple-400">Karan Garale</span>
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl mb-6 h-16 sm:h-8 text-purple-200">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  1500,
                  "Modern Web Solutions Expert",
                  1500,
                  "Building Scalable Applications",
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              "Crafting responsive, high-performance applications with React,
              Node.js & MongoDB"
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <a
                href="#projects"
                className="bg-purple-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow hover:bg-purple-700 transition inline-block"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-black border-purple-500 border-2 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow hover:bg-purple-700 transition inline-block"
              >
                Get In Touch
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Karan_Garale_Resume_01-08.pdf`}
                target="_blank"
                rel="noreferrer"
                className="bg-purple-900 border-purple-400 border text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow hover:bg-purple-800 transition inline-block"
              >
                Download Resume
              </a>
            </div>
            </div>
          </SectionFade>
        </section>

        <section id="about" className="py-16 md:py-20 container mx-auto px-6 pt-20">
          <SectionFade>
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-400">
              About Me
            </h3>
            <p className="text-center max-w-3xl mx-auto text-base sm:text-lg md:text-lg leading-relaxed text-gray-300">
            I am a 
            <span className="font-semibold text-purple-400 pl-1 pr-1">
              MERN Stack Developer
            </span>
            passionate about creating modern, scalable, and efficient web
            applications. With strong expertise in
            <span className="text-purple-400 pl-1">
              React, Node.js, Express, MongoDB
            </span>
            , I deliver seamless digital solutions that blend performance with
            design.
            </p>
          </SectionFade>
        </section>

        <section
          id="skills"
          className="py-16 md:py-20 bg-gradient-to-r from-black via-purple-950 to-black pt-20"
        >
          <div className="container mx-auto px-6">
            <SectionFade>
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                React.js / Next.js
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                Node.js / Express.js
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                TypeScript
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                MySQL / MongoDB
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                JavaScript (ES6+)
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                Redux & Context API
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                Apollo GraphQL
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                HTML5 & CSS3
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                Git & GitLab
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-1 transition-all duration-300">
                REST APIs / Postman
              </div>
            </div>
            </SectionFade>
          </div>
        </section>

        <section
          id="projects"
          className="py-16 md:py-20 container mx-auto px-6 pt-20"
        >
          <SectionFade>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
            Projects
          </h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-2 transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                Faces Consent – Clinic Management SaaS
              </h4>
              <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {["React.js", "Next.js", "TypeScript", "Node.js", "MySQL"].map(tech => (
                  <span key={tech} className="bg-purple-800 text-purple-200 text-xs px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="mb-2">
                <a
                  href="https://facesconsent.com"
                  className="text-purple-300 hover:text-purple-400 text-sm font-semibold underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
              <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  Contributed to a production SaaS platform serving aesthetic practitioners for managing digital consent forms, client bookings, prescriptions, team roles, and in-app payments.
                </li>
                <li>
                  Optimized module performance and developed new features including role-based dashboards and booking management workflows.
                </li>
              </ul>
            </div>

            <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-2 transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                O’TerRi Laundry Management System (MKS DigiTech)
              </h4>
              <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {["React.js", "Node.js", "MySQL"].map(tech => (
                  <span key={tech} className="bg-purple-800 text-purple-200 text-xs px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="mb-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mksoterri.app"
                  className="text-purple-300 hover:text-purple-400 text-sm font-semibold underline"
                  target="_blank"
                >
                  App Link
                </a>
              </div>
              <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  Built a multi-panel system for Styler, Exhibitor, and Admin with role-based routing and dashboards.
                </li>
                <li>
                  Developed order tracking, user interaction modules, and secure MySQL authentication mechanisms.
                </li>
              </ul>
            </div>
          </div>
          </SectionFade>
        </section>

        <section
          id="experience"
          className="py-16 md:py-20 bg-gradient-to-r from-black via-purple-950 to-black pt-20"
        >
          <div className="container mx-auto px-6">
            <SectionFade>
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
              Experience
            </h3>
            <div className="space-y-8 max-w-4xl mx-auto border-l-2 border-purple-800 pl-4 sm:pl-8">
              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-2 transition-all duration-300 relative">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-6 sm:-left-10 top-6 border-4 border-black"></div>
                <span className="absolute top-4 right-4 bg-purple-700/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Full-Time
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                  MERN Stack Developer
                </h4>
                <p className="text-gray-400">
                  TechErudite | September 2025 – Present
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>
                    Developed and optimized modules for Faces Consent, a live SaaS platform used by aesthetic clinics for digital consent forms, appointment booking, team management, and client records.
                  </li>
                  <li>
                    Built reusable React.js components for practitioner dashboards, booking flows, and role-based admin panels.
                  </li>
                  <li>
                    Integrated and optimized Node.js REST APIs to support real-time data handling across web and mobile clients.
                  </li>
                  <li>
                    Collaborated in an agile team to ship feature updates, resolve bugs, and maintain production code quality.
                  </li>
                </ul>
              </div>

              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-2 transition-all duration-300 relative">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-6 sm:-left-10 top-6 border-4 border-black"></div>
                <span className="absolute top-4 right-4 bg-purple-700/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Full-Time
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                  MERN Stack Developer
                </h4>
                <p className="text-gray-400">
                  MKS DigiTech | September 2024 – September 2025
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>
                    Integrated RESTful APIs with Node.js and Express.js, improving API response time by 20%.
                  </li>
                  <li>
                    Implemented role-based access control and multi-user management to strengthen application security.
                  </li>
                  <li>
                    Optimized MySQL queries, reducing data retrieval time by 30% and improving overall responsiveness.
                  </li>
                  <li>
                    Developed reusable React.js components with Redux and Context API for better maintainability.
                  </li>
                </ul>
              </div>

              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-2 transition-all duration-300 relative">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-6 sm:-left-10 top-6 border-4 border-black"></div>
                <span className="absolute top-4 right-4 bg-purple-700/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Internship
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                  Full Stack Developer Intern
                </h4>
                <p className="text-gray-400">
                  Hyperlink Infosystem | January 2024 – July 2024
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>
                    Built responsive web interfaces using HTML5, CSS3, JavaScript, Bootstrap, and jQuery.
                  </li>
                  <li>
                    Developed React.js components integrated with Node.js APIs for data-driven applications.
                  </li>
                  <li>
                    Collaborated with the development team to debug, test, and optimize application performance.
                  </li>
                </ul>
              </div>
            </div>
            </SectionFade>
          </div>
        </section>

        <section
          id="education"
          className="py-16 md:py-20 container mx-auto px-6 pt-20"
        >
          <SectionFade>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
            <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 text-center shadow hover:shadow-purple-700 transition w-full sm:w-1/2 md:w-1/3">
              <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                Masters of Computer Applications (MCA)
              </h4>
              <p className="text-gray-400 mt-2">Dharmsinh Desai University</p>
              <p className="text-gray-400">2022 - 2024</p>
            </div>
            <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 text-center shadow hover:shadow-purple-700 transition w-full sm:w-1/2 md:w-1/3">
              <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-gray-400 mt-2">MKBU University</p>
              <p className="text-gray-400">2019 - 2022</p>
            </div>
          </div>
          </SectionFade>
        </section>

        <section
          id="certifications"
          className="py-16 md:py-20 bg-gradient-to-r from-black via-purple-950 to-black pt-20"
        >
          <div className="container mx-auto px-6">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
              Certifications
            </h3>
            <div className="space-y-6 max-w-3xl mx-auto flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 sm:space-y-0">
              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-2 transition-all duration-300 flex items-center space-x-4 w-full sm:w-1/2">
                <div className="flex-shrink-0 text-purple-400">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                    <path d="M1 12v5c0 0 6 3 11 3s11-3 11-3v-5l-11 5-11-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                    Full Stack Developer Internship
                  </h4>
                  <p className="text-gray-400 mt-1">Hyperlink Infosystem</p>
                </div>
              </div>

              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 hover:-translate-y-2 transition-all duration-300 flex items-center space-x-4 w-full sm:w-1/2">
                <div className="flex-shrink-0 text-purple-400">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                    <path d="M1 12v5c0 0 6 3 11 3s11-3 11-3v-5l-11 5-11-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                    MERN Stack Live Projects
                  </h4>
                  <p className="text-gray-400 mt-1">MKS DigiTech LLP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 md:py-20 bg-gradient-to-r from-black via-purple-950 to-black pt-20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
              Contact
            </h3>

            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex flex-col gap-6 md:w-1/2">
                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-700 text-white shadow hover:shadow-purple-700 transition flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12.713l-11.99-8.713h23.98l-11.99 8.713zm0 2.574l-12-8.713v13.426h24v-13.426l-12 8.713z" />
                  </svg>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                      Email
                    </h4>
                    <p className="mt-1">karan.garale.tech@gmail.com</p>
                    <p className="mt-1 text-gray-400 text-sm">karangarale123@gmail.com</p>
                  </div>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-700 text-white shadow hover:shadow-purple-700 transition flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.43 2.3z" />
                  </svg>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                      Phone
                    </h4>
                    <p className="mt-1">+91-7048152544</p>
                  </div>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-700 text-white shadow hover:shadow-purple-700 transition flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8h4.54v16H.23V8zm7.23 0h4.36v2.2h.06c.61-1.16 2.1-2.4 4.32-2.4 4.62 0 5.48 3.05 5.48 7v8.2h-4.55v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.84v7.38H7.46V8z" />
                  </svg>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/karan-garale-779832256"
                      target="_blank"
                      className="mt-1 block text-white hover:text-purple-400 transition"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-700 text-white shadow hover:shadow-purple-700 transition flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.754-1.335-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.42-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.807 5.624-5.48 5.922.43.37.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.288 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/karangarle"
                      target="_blank"
                      className="mt-1 block text-white hover:text-purple-400 transition"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition md:w-1/2 flex flex-col justify-between">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300 mb-4 text-center">
                  Send a Message
                </h4>
                <form 
                  className="space-y-4 flex-1 flex flex-col justify-between"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormStatus('success');
                    setFormData({ name: "", email: "", message: "" });
                    setTimeout(() => setFormStatus(null), 5000);
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-purple-400 bg-black text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-purple-400 bg-black text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-purple-400 bg-black text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                    required
                  ></textarea>
                  {formStatus === 'success' && (
                    <div className="text-green-400 text-sm font-medium text-center bg-green-900/30 py-2 rounded-lg border border-green-700">
                      Message sent successfully! I'll be in touch soon.
                    </div>
                  )}
                  <button
                    type="submit"
                    className="bg-purple-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-purple-300 transition w-full flex items-center justify-center space-x-2 mt-2 hover:-translate-y-1"
                  >
                    <span>✈ Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center bg-black border-t border-purple-800">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/karangarle" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.754-1.335-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.42-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.807 5.624-5.48 5.922.43.37.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.288 0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/karan-garale-779832256" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.23 8h4.54v16H.23V8zm7.23 0h4.36v2.2h.06c.61-1.16 2.1-2.4 4.32-2.4 4.62 0 5.48 3.05 5.48 7v8.2h-4.55v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.84v7.38H7.46V8z" /></svg>
            </a>
            <a href="mailto:karan.garale.tech@gmail.com" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.99-8.713h23.98l-11.99 8.713zm0 2.574l-12-8.713v13.426h24v-13.426l-12 8.713z" /></svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Karan Garale. All rights reserved.
          </p>
        </footer>

        {/* Back to top button */}
        {showTopBtn && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all z-50 hover:-translate-y-2 focus:outline-none"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}

export default App;
