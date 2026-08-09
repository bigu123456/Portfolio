const Navbar = ({ darkMode, setDarkMode }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b-2 transition-all duration-300 ${
        darkMode
          ? "bg-black text-white border-white"
          : "bg-white text-black border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Bigu
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Skills
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Projects
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {/* Theme */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-2 rounded-lg border transition text-xl ${
              darkMode
                ? "border-gray-600 hover:bg-white hover:text-black"
                : "border-gray-300 hover:bg-black hover:text-white"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Resume */}
          <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 transition">
            Resume
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;