const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          Bigu
        </h1>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;