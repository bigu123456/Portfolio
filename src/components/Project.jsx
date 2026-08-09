import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website with product listing, cart functionality, and modern UI.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "/projects/ecommerce.png",
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built to showcase my skills, projects, and experience.",
      technologies: ["React", "Tailwind CSS", "React Router"],
      image: "/projects/portfolio.png",
      live: "#",
      github: "#",
    },
    {
      title: "Weather Application",
      description:
        "A weather application that fetches real-time weather data using an API.",
      technologies: ["React", "API", "CSS"],
      image: "/projects/weather.png",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      className={`min-h-screen py-20 transition-all duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-cyan-500">
          My Projects
        </h1>

        <p
          className={`text-center mt-4 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Some projects I have built using modern frontend technologies.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border transition ${
                darkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-100 border-gray-300"
              } hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                {/* Project Title */}
                <h2 className="text-2xl font-bold text-cyan-400">
                  {project.title}
                </h2>

                {/* Description */}
                <p
                  className={`mt-3 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    className={`flex items-center gap-2 border border-cyan-500 px-4 py-2 rounded-lg transition hover:bg-cyan-500 ${
                      darkMode
                        ? "hover:text-black"
                        : "hover:text-white"
                    }`}
                  >
                    GitHub
                    <FaGithub />
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;