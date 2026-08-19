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
      id="skills"
      className={`min-h-screen py-24 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-semibold">
            My Expertise
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Skills &{" "}
            <span className="text-cyan-500">
              Technologies
            </span>
          </h1>

          <p
            className={`mt-6 text-lg ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Technologies and tools I use to build modern,
            responsive and user-friendly web applications.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "bg-gray-900 border-gray-800 hover:border-cyan-500"
                  : "bg-white border-gray-200 shadow-lg hover:border-cyan-400 hover:shadow-xl"
              }`}
            >

              {/* Category */}
              <div className="mb-7">

                <h2 className="text-2xl font-bold text-cyan-500">
                  {category.title}
                </h2>

                <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />

              </div>

              {/* Skills */}
              <div className="space-y-5">

                {category.skills.map((skill, i) => (
                  <div key={i}>

                    <div className="flex justify-between mb-2">

                      <span className="font-medium">
                        {skill}
                      </span>

                      <span className="text-cyan-500 text-sm">
                        {90 - i * 3}%
                      </span>

                    </div>

                    <div
                      className={`h-2 rounded-full ${
                        darkMode
                          ? "bg-gray-800"
                          : "bg-gray-200"
                      }`}
                    >
                      <div
                        className="h-2 bg-cyan-500 rounded-full transition-all duration-700"
                        style={{
                          width: `${90 - i * 3}%`,
                        }}
                      />
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="text-center mt-16">

          <p
            className={`text-sm ${
              darkMode
                ? "text-gray-500"
                : "text-gray-500"
            }`}
          >
            Always learning. Always building. Always improving.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Skills;