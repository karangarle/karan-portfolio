import React, { useState } from "react";
import image from "./assets/img/IMG_6545.JPG";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black text-gray-200">
        <header className="fixed w-full bg-black/90 backdrop-blur z-50 border-b border-purple-800">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold text-purple-500">
              Karan's Portfolio
            </h1>

            <nav className="hidden md:flex space-x-6 font-medium">
              <a href="#home" className="hover:text-purple-400">
                Home
              </a>
              <a href="#about" className="hover:text-purple-400">
                About
              </a>
              <a href="#skills" className="hover:text-purple-400">
                Skills
              </a>
              <a href="#projects" className="hover:text-purple-400">
                Projects
              </a>
              <a href="#experience" className="hover:text-purple-400">
                Experience
              </a>
              <a href="#education" className="hover:text-purple-400">
                Education
              </a>
              <a href="#contact" className="hover:text-purple-400">
                Contact
              </a>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-purple-400 focus:outline-none"
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
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#education"
                className="hover:text-purple-400"
                onClick={() => setMenuOpen(false)}
              >
                Education
              </a>
              <a
                href="#contact"
                className="hover:text-purple-400"
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
          <div className="flex justify-center mb-8 md:mb-0">
            <img
              src={`${image}`}
              alt="Profile"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-purple-500 shadow-2xl"
            />
          </div>
          <div className="text-center md:text-left md:ml-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-purple-400">Karan Garale</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              MERN Stack Developer | Modern Web Solutions Expert
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              "Crafting responsive, high-performance applications with React,
              Node.js & MongoDB"
            </p>
            <a
              href="#projects"
              className="bg-purple-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow hover:bg-purple-700 transition inline-block p-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-black border-purple-500 border-2 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow hover:bg-purple-700 transition inline-block m-2"
            >
              Get In Touch
            </a>
          </div>
        </section>

        <section id="about" className="py-16 md:py-20 container mx-auto px-6 pt-20">
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
        </section>

        <section
          id="skills"
          className="py-16 md:py-20 bg-gradient-to-r from-black via-purple-950 to-black pt-20"
        >
          <div className="container mx-auto px-6">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                React.js
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                Node.js
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                Express.js
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                MongoDB
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                JavaScript
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                HTML5
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                CSS3
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                Bootstrap/Tailwind
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                MySQL
              </div>
              <div className="p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
                REST APIs
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-16 md:py-20 container mx-auto px-6 pt-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
            Projects
          </h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
              <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                O’TerRi Laundry Management System
              </h4>
              <p className="text-gray-400 mt-1">
                Tech Stack: React.js, Node.js, MySQL |
                <a
                  href="https://play.google.com/store/apps/details?id=com.mksoterri.app"
                  className="text-purple-300 underline ml-1"
                  target="_blank"
                >
                  App Link
                </a>
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  Developed a multi-panel system for Styler, Exhibitor, and
                  Admin with role-based routing.
                </li>
                <li>
                  Created modules for order tracking, user interaction, and
                  panel-specific dashboards.
                </li>
                <li>
                  Implemented secure MySQL data handling and authentication
                  mechanisms.
                </li>
                <li>
                  Automated laundry operations and streamlined workflows across
                  multiple panels.
                </li>
              </ul>
            </div>

            <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition">
              <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                E-commerce Website (Personal Project)
              </h4>
              <p className="text-gray-400 mt-1">
                Tech Stack: React.js, Node.js, MySQL
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  Built features including product listing, shopping cart,
                  checkout, and user messaging.
                </li>
                <li>
                  Developed secure backend services and optimized MySQL queries
                  for better performance.
                </li>
                <li>
                  Managed application state using Context API for a seamless
                  user experience.
                </li>
                <li>
                  This is a personal project demonstrating full-stack
                  development skills.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="py-16 md:py-20 bg-gradient-to-r from-black via-purple-950 to-black pt-20"
        >
          <div className="container mx-auto px-6">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-purple-400">
              Experience
            </h3>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition relative">
                <span className="absolute top-4 right-4 bg-purple-700/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Full-Time
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                  MERN Stack Developer
                </h4>
                <p className="text-gray-400">
                  MKS Digitech LLP | 2024 - Present
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>
                    Built live projects including O’TerRi Laundry Management
                    System.
                  </li>
                  <li>Created REST APIs and integrated with frontends.</li>
                  <li>
                    Developed reusable React components and role-based access.
                  </li>
                </ul>
              </div>

              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-xl border border-purple-700 shadow hover:shadow-purple-700 transition relative">
                <span className="absolute top-4 right-4 bg-purple-700/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Internship
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                  Full Stack Developer
                </h4>
                <p className="text-gray-400">
                  Hyperlink Infosystem | Jan 2024 - Jul 2024
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>
                    Built responsive web interfaces using HTML5, CSS3,
                    JavaScript, Bootstrap, and jQuery.
                  </li>
                  <li>
                    Developed React.js components integrated with Node.js APIs
                    for data-driven applications.
                  </li>
                  <li>
                    Optimized performance and collaborated with the team to
                    debug and enhance features.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          className="py-16 md:py-20 container mx-auto px-6 pt-20"
        >
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
                    <p className="mt-1">karangarale123@gmail.com</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-purple-300">
                      Email
                    </h4>
                    <p className="mt-1">karan.garale.tech@gmail.com</p>
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
                <form className="space-y-4 flex-1 flex flex-col justify-between">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-purple-400 bg-black text-white p-3 rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-purple-400 bg-black text-white p-3 rounded-lg"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full border border-purple-400 bg-black text-white p-3 rounded-lg"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-purple-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-purple-300 transition w-full flex items-center justify-center space-x-2 mt-2"
                  >
                    <span>✈ Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-6 text-center bg-black border-t border-purple-800">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; 2025 Karan Garale. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
