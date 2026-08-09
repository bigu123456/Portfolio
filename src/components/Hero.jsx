import bigyan from "../image/bigyan.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = ({ darkMode }) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`min-h-screen flex items-center transition-all duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Side */}
          <div>
            {/* <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-7 rounded-full text-sm mb-5">
              Available for Frontend Opportunities
            </span> */}

            <p
              className={`text-xl ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Hi, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-2">
              Bigyan Acharya
            </h1>

            <h2 className="text-3xl mt-4 font-semibold">
              <span className="text-cyan-500">
                Frontend React Developer
              </span>
            </h2>

            <p
              className={`mt-6 leading-8 max-w-xl ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              I build modern, responsive, and user-friendly web
              applications using React.js, JavaScript, and Tailwind CSS.
              I focus on creating clean UI and smooth user experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={scrollToContact}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Hire Me
              </button>

              <button
                className={`border border-cyan-500 px-6 py-3 rounded-lg font-semibold transition hover:bg-cyan-500 ${
                  darkMode
                    ? "hover:text-black"
                    : "hover:text-white"
                }`}
              >
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8 text-3xl">
              <a
                href="#"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-20"></div>

              <img
                src={bigyan}
                alt="Bigyan Acharya"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-lg hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;