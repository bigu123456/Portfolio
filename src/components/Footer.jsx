
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`border-t-2 transition-all duration-300 ${
        darkMode
          ? "bg-black text-white border-white"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-cyan-400">
              Bigu
            </h2>

            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Frontend React Developer
            </p>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Building modern and responsive web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-5">

              <a
                href="#home"
                className="hover:text-cyan-400 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-cyan-400 transition"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-cyan-400 transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-cyan-400 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">

            <h3 className="text-lg font-semibold text-cyan-400 mb-4">
              Connect With Me
            </h3>

            <div className="flex justify-center gap-5 text-2xl">

              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className="hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div
          className={`border-t mt-8 pt-6 text-center text-sm ${
            darkMode
              ? "border-gray-700 text-gray-500"
              : "border-gray-300 text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} Bigu. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
