const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Design",
    "REST API",
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-cyan-500">
          My Skills
        </h1>

        <p className="mt-4 text-gray-400">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-cyan-500 rounded-lg p-6 hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              <h2 className="text-xl font-semibold">
                {skill}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;