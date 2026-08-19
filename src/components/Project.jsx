import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
  {
    title: "Jersey Hub",
    description:
      "A modern football jersey e-commerce platform where users can explore jerseys, view product details, add products to their cart, manage favorites, and enjoy a responsive shopping experience.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "React Router"],
    image: `${import.meta.env.BASE_URL}images/jersy.png`,
    live: "https://bigu123456.github.io/Football-Jersy/",
    github: "#",
  },

  {
    title: "Employee Management System",
    description:
      "A professional employee management dashboard designed to manage employee information efficiently with CRUD operations, statistics, search, filtering, department management, status tracking, settings, and dark mode.",
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Context API",
    ],
    image: `${import.meta.env.BASE_URL}images/employee.png`,
    live: "https://bigu123456.github.io/employee/",
    github: "#",
  },

  {
    title: "Weather Application",
    description:
      "A responsive weather application that provides real-time weather information using a weather API. Users can search for locations and view current weather conditions through a clean and simple interface.",
    technologies: ["React", "Weather API", "JavaScript", "CSS"],
    image: `${import.meta.env.BASE_URL}images/weather.png`,
    live: "https://bigu123456.github.io/weather-portfolio/",
    github: "#",
  },
];

  return (
    <section
      className={`min-h-screen py-5 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-500 font-semibold tracking-[0.3em] uppercase text-sm mb-3">
            My Work
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My{" "}
            <span className="text-cyan-500">
              Projects
            </span>
          </h1>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-5 rounded-full" />

          <p
            className={`max-w-2xl mx-auto mt-6 text-lg ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Here are some of the projects I have built while
            developing my skills in React, modern UI design,
            APIs, and frontend development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl
                border
                transition-all duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
                ${
                  darkMode
                    ? "bg-gray-900/80 border-gray-800 hover:border-cyan-500"
                    : "bg-gray-50 border-gray-200 hover:border-cyan-500"
                }
                hover:shadow-2xl
                hover:shadow-cyan-500/20
              `}
            >

              {/* Top Glow */}
              <div
                className="
                  absolute -top-20 -right-20
                  w-40 h-40
                  bg-cyan-500/10
                  rounded-full
                  blur-3xl
                  group-hover:bg-cyan-500/20
                  transition-all duration-500
                "
              />

              {/* Project Image */}
              <div className="relative overflow-hidden h-56">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    opacity-70
                    group-hover:opacity-90
                    transition-opacity duration-500
                  "
                />

                {/* Project Number */}
                <div
                  className="
                    absolute top-4 left-4
                    w-10 h-10
                    rounded-full
                    bg-cyan-500
                    text-black
                    flex items-center justify-center
                    font-bold
                    shadow-lg
                  "
                >
                  0{index + 1}
                </div>

              </div>

              {/* Content */}
              <div className="p-6 relative z-10">

                {/* Title */}
                <h2
                  className="
                    text-2xl
                    font-bold
                    text-cyan-400
                    group-hover:text-cyan-300
                    transition-colors duration-300
                  "
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p
                  className={`
                    mt-4
                    leading-7
                    text-sm
                    ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  `}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1.5
                        text-xs
                        font-medium
                        rounded-full
                        border
                        border-cyan-500/30
                        bg-cyan-500/10
                        text-cyan-400
                        transition-all duration-300
                        hover:bg-cyan-500
                        hover:text-black
                        hover:border-cyan-500
                        hover:-translate-y-1
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-7">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/btn
                      flex items-center justify-center
                      gap-2
                      px-5 py-2.5
                      rounded-lg
                      bg-cyan-500
                      text-black
                      font-semibold
                      text-sm
                      transition-all duration-300
                      hover:bg-cyan-400
                      hover:scale-105
                      hover:shadow-lg
                      hover:shadow-cyan-500/30
                    "
                  >
                    Live Demo

                    <FaExternalLinkAlt
                      className="
                        text-xs
                        transition-transform duration-300
                        group-hover/btn:translate-x-1
                        group-hover/btn:-translate-y-1
                      "
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group/btn
                      flex items-center justify-center
                      gap-2
                      px-5 py-2.5
                      rounded-lg
                      border
                      border-cyan-500
                      font-semibold
                      text-sm
                      transition-all duration-300
                      hover:bg-cyan-500
                      hover:scale-105
                      ${
                        darkMode
                          ? "text-cyan-400 hover:text-black"
                          : "text-cyan-600 hover:text-black"
                      }
                    `}
                  >
                    GitHub

                    <FaGithub
                      className="
                        text-base
                        transition-transform duration-300
                        group-hover/btn:rotate-12
                      "
                    />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">

          <p
            className={`text-sm ${
              darkMode
                ? "text-gray-500"
                : "text-gray-500"
            }`}
          >
            More projects and exciting ideas are coming soon.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Projects;