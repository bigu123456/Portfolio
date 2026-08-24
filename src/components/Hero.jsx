import bigyan from "../image/bigyan.jpg";
import {

  FaArrowRight,

  FaReact,
  FaJs,
} from "react-icons/fa";

const Hero = ({ darkMode }) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Cyan Glow */}
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            darkMode
              ? "bg-cyan-500/10"
              : "bg-cyan-500/5"
          }`}
        />

        <div
          className={`absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl ${
            darkMode
              ? "bg-blue-500/10"
              : "bg-blue-500/5"
          }`}
        />

        {/* Grid */}
        <div
          className={`absolute inset-0 opacity-[0.04] ${
            darkMode ? "block" : "hidden"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* ================= LEFT ================= */}
          <div className="order-2 lg:order-1">

            {/* Status Badge */}
            <div
              className={`
                inline-flex items-center gap-3
                px-4 py-2
                rounded-full
                border
                text-sm
                mb-6
                ${
                  darkMode
                    ? "border-cyan-500/30 bg-cyan-500/5 text-cyan-400"
                    : "border-cyan-500/30 bg-cyan-50 text-cyan-600"
                }
              `}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
              </span>

              Available for Frontend Opportunities
            </div>

            {/* Greeting */}
            <p
              className={`text-lg mb-2 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Bigyan{" "}
              <span className="text-cyan-500">
                Acharya
              </span>
            </h1>

            {/* Role */}
            <h2 className="mt-5 text-2xl sm:text-3xl font-semibold">
              <span
                className={
                  darkMode
                    ? "text-gray-200"
                    : "text-gray-800"
                }
              >
                Frontend{" "}
              </span>

              <span className="text-cyan-500">
                React Developer
              </span>
            </h2>

            {/* Description */}
            <p
              className={`mt-7 max-w-2xl text-base sm:text-lg leading-8 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              I build modern, responsive, and user-focused web
              applications using React.js, JavaScript, and
              Tailwind CSS. I enjoy turning ideas into clean,
              scalable interfaces with smooth user experiences.
            </p>

            {/* Skills Mini List */}
            <div className="flex flex-wrap gap-3 mt-7">

              {["React.js", "JavaScript", "Tailwind CSS", "REST APIs"].map(
                (skill) => (
                  <span
                    key={skill}
                    className={`
                      px-3 py-1.5
                      text-sm
                      rounded-lg
                      border
                      transition-all duration-300
                      hover:-translate-y-1
                      ${
                        darkMode
                          ? "border-gray-700 text-gray-300 bg-gray-900/50 hover:border-cyan-500 hover:text-cyan-400"
                          : "border-gray-300 text-gray-600 bg-gray-50 hover:border-cyan-500 hover:text-cyan-600"
                      }
                    `}
                  >
                    {skill}
                  </span>
                )
              )}

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              {/* Hire Me */}
              <button
                onClick={scrollToContact}
                className="
                  group
                  flex items-center gap-3
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  px-7 py-3.5
                  rounded-xl
                  font-semibold
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-xl
                  hover:shadow-cyan-500/20
                "
              >
                Hire Me

                <FaArrowRight
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Download CV */}
              {/* <a
                href="/Bigyan-Acharya-CV.pdf"
                download
                className={`
                  flex items-center gap-3
                  px-7 py-3.5
                  rounded-xl
                  font-semibold
                  border
                  transition-all duration-300
                  hover:scale-105
                  ${
                    darkMode
                      ? "border-gray-700 text-white hover:border-cyan-500 hover:text-cyan-400"
                      : "border-gray-300 text-gray-800 hover:border-cyan-500 hover:text-cyan-600"
                  }
                `}
              >
                <FaDownload />
                Download CV
              </a> */}

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-9">

              <span
                className={`text-sm mr-2 ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-500"
                }`}
              >
               
              </span>

              {/* GitHub */}
              

              {/* LinkedIn */}
             

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              {/* Outer Glow */}
              <div
                className="
                  absolute
                  inset-[-25px]
                  rounded-full
                  bg-cyan-500/20
                  blur-3xl
                  animate-pulse
                "
              />

              {/* Rotating Border */}
              <div
                className="
                  absolute
                  inset-[-10px]
                  rounded-full
                  border
                  border-dashed
                  border-cyan-500/40
                  animate-[spin_20s_linear_infinite]
                "
              />

              {/* Image Container */}
              <div
                className="
                  relative
                  w-72 h-72
                  sm:w-80 sm:h-80
                  lg:w-[400px] lg:h-[400px]
                "
              >

                <img
                  src={bigyan}
                  alt="Bigyan Acharya"
                  className="
                    relative
                    w-full h-full
                    object-cover
                    rounded-full
                    border-4
                    border-cyan-500
                    shadow-2xl
                    shadow-cyan-500/20
                    transition-all
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </div>

              {/* React Badge */}
              <div
                className={`
                  absolute
                  -top-3
                  right-2
                  sm:right-0
                  flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  border
                  shadow-xl
                  animate-bounce
                  ${
                    darkMode
                      ? "bg-gray-900 border-gray-700 text-cyan-400"
                      : "bg-white border-gray-200 text-cyan-600"
                  }
                `}
              >
                <FaReact className="text-xl" />
                <span className="text-sm font-semibold">
                  React.js
                </span>
              </div>

              {/* JavaScript Badge */}
              <div
                className={`
                  absolute
                  bottom-4
                  -left-5
                  sm:-left-8
                  flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  border
                  shadow-xl
                  animate-[bounce_3s_infinite]
                  ${
                    darkMode
                      ? "bg-gray-900 border-gray-700 text-yellow-400"
                      : "bg-white border-gray-200 text-yellow-600"
                  }
                `}
              >
                <FaJs className="text-xl" />
                <span className="text-sm font-semibold">
                  JavaScript
                </span>
              </div>

              {/* Developer Badge */}
              <div
                className={`
                  absolute
                  bottom-16
                  -right-6
                  sm:-right-12
                  px-4 py-3
                  rounded-xl
                  border
                  shadow-xl
                  ${
                    darkMode
                      ? "bg-gray-900 border-gray-700"
                      : "bg-white border-gray-200"
                  }
                `}
              >
                <p className="text-xs text-gray-500">
                  Currently
                </p>

                <p className="text-sm font-bold text-cyan-500">
                  Building for Web 🚀
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-16">

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500">
              Scroll to explore
            </span>

            <div className="w-5 h-8 border-2 border-cyan-500 rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-cyan-500 rounded-full animate-bounce" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;