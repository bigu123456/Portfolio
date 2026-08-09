const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "React Router",
      ],
    },
    {
      title: "Styling",
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vite",
        "npm",
      ],
    },
    {
      title: "API & Others",
      skills: [
        "REST API",
        "Fetch API",
        "JSON",
        "Chrome DevTools",
      ],
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
          My Skills
        </h1>

        {/* Description */}
        <p
          className={`text-center mt-4 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Technologies and tools I use to build modern, responsive web
          applications.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border transition-all duration-300 ${
                darkMode
                  ? "bg-gray-900 border-gray-700 hover:border-cyan-500"
                  : "bg-white border-gray-200 shadow-md hover:border-cyan-400 hover:shadow-lg"
              }`}
            >
              {/* Category Title */}
              <h2 className="text-2xl font-bold text-cyan-400 mb-5">
                {category.title}
              </h2>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-200 hover:bg-cyan-500 hover:text-black hover:border-cyan-500"
                        : "bg-cyan-50 border-cyan-200 text-gray-800 hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;