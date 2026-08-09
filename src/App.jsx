import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content */}
      <main>

        {/* Home */}
        <section id="home" className="scroll-mt-20">
          <Hero darkMode={darkMode} />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20">
          <About darkMode={darkMode} />
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <Skills darkMode={darkMode} />
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <Projects darkMode={darkMode} />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <Contact darkMode={darkMode} />
        </section>

      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;