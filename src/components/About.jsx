const About = ({ darkMode }) => {
  return (
    <section
      className={`min-h-screen py-20 transition-all duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-cyan-500">
          About Me
        </h1>

        <p
          className={`text-center mt-4 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Get to know more about me and my development journey.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-5">
              Hi, I'm Bigyan Acharya
            </h2>

            <p
              className={`leading-8 mb-5 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              I'm a Frontend React Developer passionate about creating
              modern, responsive, and user-friendly web applications.
              I enjoy turning ideas into clean and interactive user
              interfaces.
            </p>

            <p
              className={`leading-8 mb-5 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              I work mainly with React.js, JavaScript, Tailwind CSS,
              React Router, and REST APIs. I focus on writing clean
              code and building responsive experiences.
            </p>

            <p
              className={`leading-8 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              I am continuously learning new technologies and
              improving my frontend development skills through
              real-world projects.
            </p>
          </div>

          {/* Right */}
          <div
            className={`rounded-xl p-8 border ${
              darkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-gray-50 border-gray-200 shadow-md"
            }`}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              What I Do
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold">
                  Frontend Development
                </h3>
                <p
                  className={`mt-2 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Building responsive interfaces using React,
                  JavaScript, HTML, and CSS.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  UI & Responsive Design
                </h3>
                <p
                  className={`mt-2 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Creating clean layouts for desktop, tablet,
                  and mobile devices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  API Integration
                </h3>
                <p
                  className={`mt-2 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Connecting frontend applications with REST APIs
                  and handling dynamic data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Continuous Learning
                </h3>
                <p
                  className={`mt-2 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Learning new technologies and improving my
                  development skills through projects.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;