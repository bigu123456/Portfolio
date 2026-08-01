import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Bigu</h2>
          <p className="text-gray-400 mt-2">
            Frontend React Developer
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex gap-6 text-gray-300">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-8 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Bigu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;