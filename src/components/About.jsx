import {
  FaReact,
  FaCode,
  FaMobileAlt,
  FaPlug,
  FaGraduationCap,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";

const About = ({ darkMode }) => {
  const services = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description:
        "Building modern and scalable web interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Creating responsive websites that provide a smooth experience across desktops, tablets, and mobile devices.",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      description:
        "Integrating REST APIs, handling dynamic data, and connecting frontend applications with backend services.",
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Writing organized, reusable, and maintainable components while following modern frontend development practices.",
    },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen pt-16 pb-24 overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {/* ================= FULL SECTION BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* LEFT CYAN GLOW */}

        <div
          className={`absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl ${
            darkMode
              ? "bg-cyan-500/10"
              : "bg-cyan-500/5"
          }`}
        />

        {/* RIGHT BLUE GLOW */}

        <div
          className={`absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-3xl ${
            darkMode
              ? "bg-blue-500/10"
              : "bg-blue-500/5"
          }`}
        />

        {/* BOTTOM GLOW */}

        <div
          className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl ${
            darkMode
              ? "bg-cyan-500/5"
              : "bg-cyan-500/5"
          }`}
        />

        {/* ================= GRID ================= */}

        <div
          className={`absolute inset-0 ${
            darkMode
              ? "opacity-[0.045]"
              : "opacity-[0.035]"
          }`}
          style={{
            backgroundImage: darkMode
              ? `
                linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)
              `
              : `
                linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)
              `,
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* ================= HEADER ================= */}

        <div className="mb-14">

          <div className="grid lg:grid-cols-3 items-center gap-6">

            {/* LEFT */}

            <div className="hidden lg:flex items-center gap-4">

              <div className="w-12 h-px bg-cyan-500" />

              <span
                className={`text-sm tracking-[0.25em] uppercase ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                01 / About
              </span>

            </div>

            {/* CENTER */}

            <div className="text-center">

              <p className="text-cyan-500 font-semibold tracking-[0.3em] uppercase text-sm mb-3">
                Get To Know Me
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                About{" "}
                <span className="text-cyan-500">
                  Me
                </span>
              </h1>

              <div className="w-20 h-1 bg-cyan-500 mx-auto mt-5 rounded-full" />

            </div>

            {/* RIGHT */}

            <div className="hidden lg:flex justify-end items-center gap-4">

              <span
                className={`text-sm tracking-[0.2em] uppercase ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                React • UI • Web
              </span>

              <div className="w-12 h-px bg-cyan-500" />

            </div>

          </div>

          {/* DESCRIPTION */}

          <p
            className={`max-w-3xl mx-auto mt-6 text-center text-lg leading-8 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            A passionate frontend developer focused on building
            modern, responsive, and user-friendly web applications.
          </p>

        </div>

        {/* ================= ABOUT INTRO ================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT CONTENT */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 text-xl">
                <FaLaptopCode />
              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Who I Am
                </p>

                <h2 className="text-2xl font-bold">
                  Bigyan Acharya
                </h2>

              </div>

            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">

              Turning ideas into{" "}

              <span className="text-cyan-500">
                interactive experiences.
              </span>

            </h3>

            <p
              className={`leading-8 mb-5 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              I'm a Frontend React Developer passionate about
              creating modern, responsive, and user-friendly web
              applications. I enjoy transforming ideas and designs
              into functional digital experiences.
            </p>

            <p
              className={`leading-8 mb-5 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              My primary focus is React.js, JavaScript, Tailwind
              CSS, React Router, and REST API integration. I care
              about writing clean code, creating reusable components,
              and delivering interfaces that work smoothly across
              different devices.
            </p>

            <p
              className={`leading-8 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              I continuously improve my skills by building
              real-world projects and exploring new technologies.
              My goal is to grow as a developer while creating
              meaningful and high-quality web applications.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div
                className={`p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? "bg-gray-900/80 border-gray-800 hover:border-cyan-500"
                    : "bg-white/90 border-gray-200 hover:border-cyan-500"
                }`}
              >
                <h4 className="text-2xl font-bold text-cyan-500">
                  5+
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Projects
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? "bg-gray-900/80 border-gray-800 hover:border-cyan-500"
                    : "bg-white/90 border-gray-200 hover:border-cyan-500"
                }`}
              >
                <h4 className="text-2xl font-bold text-cyan-500">
                  React
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Primary Stack
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? "bg-gray-900/80 border-gray-800 hover:border-cyan-500"
                    : "bg-white/90 border-gray-200 hover:border-cyan-500"
                }`}
              >
                <h4 className="text-2xl font-bold text-cyan-500">
                  100%
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Passion
                </p>
              </div>

            </div>

          </div>

          {/* ================= JOURNEY ================= */}

          <div
            className={`relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
              darkMode
                ? "bg-gray-900/85 border-gray-800 hover:border-cyan-500"
                : "bg-white/90 border-gray-200 hover:border-cyan-500"
            }`}
          >

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 text-2xl">
                <FaGraduationCap />
              </div>

              <div>

                <p className="text-sm text-gray-500">
                  My Journey
                </p>

                <h2 className="text-2xl font-bold">
                  Growing Every Day
                </h2>

              </div>

            </div>

            <div className="relative space-y-8">

              <div className="absolute left-3 top-3 bottom-3 w-px bg-cyan-500/30" />

              {/* 1 */}

              <div className="relative flex gap-6">

                <div
                  className={`relative z-10 w-6 h-6 rounded-full bg-cyan-500 border-4 flex-shrink-0 ${
                    darkMode
                      ? "border-gray-900"
                      : "border-white"
                  }`}
                />

                <div>

                  <h3 className="font-semibold text-lg">
                    Frontend Development
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-7 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    Building responsive interfaces and learning
                    modern React development practices.
                  </p>

                </div>

              </div>

              {/* 2 */}

              <div className="relative flex gap-6">

                <div
                  className={`relative z-10 w-6 h-6 rounded-full bg-cyan-500 border-4 flex-shrink-0 ${
                    darkMode
                      ? "border-gray-900"
                      : "border-white"
                  }`}
                />

                <div>

                  <h3 className="font-semibold text-lg">
                    Real-World Projects
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-7 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    Developing projects such as e-commerce,
                    weather applications, and employee management
                    systems.
                  </p>

                </div>

              </div>

              {/* 3 */}

              <div className="relative flex gap-6">

                <div
                  className={`relative z-10 w-6 h-6 rounded-full bg-cyan-500 border-4 flex-shrink-0 ${
                    darkMode
                      ? "border-gray-900"
                      : "border-white"
                  }`}
                />

                <div>

                  <h3 className="font-semibold text-lg">
                    Full-Stack Growth
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-7 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    Expanding my skills into backend development,
                    APIs, databases, authentication, and complete
                    full-stack applications.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= WHAT I DO ================= */}

        <div className="mb-10 text-center">

          <p className="text-cyan-500 font-semibold uppercase tracking-[0.2em] text-sm">
            My Expertise
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What I Do
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-4 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            I focus on creating fast, responsive, and maintainable
            web applications with modern frontend technologies.
          </p>

        </div>

        {/* ================= SERVICES ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-3 ${
                darkMode
                  ? "bg-gray-900/85 border-gray-800 hover:border-cyan-500"
                  : "bg-white/90 border-gray-200 hover:border-cyan-500"
              } hover:shadow-xl hover:shadow-cyan-500/10`}
            >

              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 text-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p
                className={`text-sm leading-7 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              <div className="mt-5 text-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <FaRocket />
              </div>

            </div>

          ))}

        </div>

        {/* ================= CTA ================= */}

        <div className="text-center mt-20">

          <p
            className={`text-sm ${
              darkMode
                ? "text-gray-500"
                : "text-gray-500"
            }`}
          >
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Let's Connect
            <FaRocket />
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;