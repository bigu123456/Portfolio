import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`relative min-h-screen py-24 overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-500 font-semibold tracking-[0.3em] uppercase text-sm">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            Let's Work{" "}
            <span className="text-cyan-500">
              Together
            </span>
          </h1>

          <p
            className={`mt-6 text-lg leading-relaxed ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Have a project in mind, a question, or an exciting
            opportunity? I'd love to hear from you.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              Let's{" "}
              <span className="text-cyan-500">
                Connect
              </span>
            </h2>

            <p
              className={`leading-relaxed mb-8 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              I'm always open to discussing new projects,
              creative ideas, freelance opportunities, or
              potential collaborations.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">

              {/* Email */}
              <div
                className={`group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-cyan-500"
                    : "bg-white border-gray-200 shadow-md hover:border-cyan-400"
                }`}
              >

                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-white transition">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-cyan-500 font-medium">
                    Email
                  </p>

                  <p className="font-medium mt-1">
                    acharyabigu@gmail.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div
                className={`group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-cyan-500"
                    : "bg-white border-gray-200 shadow-md hover:border-cyan-400"
                }`}
              >

                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-white transition">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-sm text-cyan-500 font-medium">
                    Phone
                  </p>

                  <p className="font-medium mt-1">
                    9810205962
                  </p>
                </div>

              </div>

              {/* Location */}
              <div
                className={`group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-cyan-500"
                    : "bg-white border-gray-200 shadow-md hover:border-cyan-400"
                }`}
              >

                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-white transition">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-cyan-500 font-medium">
                    Location
                  </p>

                  <p className="font-medium mt-1">
                    Kathmandu, Nepal
                  </p>
                </div>

              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8">

              <p
                className={`text-sm mb-4 ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-500"
                }`}
              >
                Find me online
              </p>

              <div className="flex gap-4">

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 ${
                    darkMode
                      ? "border-gray-800 bg-gray-900"
                      : "border-gray-200 bg-white shadow-sm"
                  }`}
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 ${
                    darkMode
                      ? "border-gray-800 bg-gray-900"
                      : "border-gray-200 bg-white shadow-sm"
                  }`}
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            className={`relative p-7 md:p-9 rounded-2xl border transition-all duration-300 ${
              darkMode
                ? "bg-gray-950 border-gray-800"
                : "bg-white border-gray-200 shadow-xl"
            }`}
          >

            {/* Top Accent */}
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <div className="mb-7">

              <h2 className="text-2xl font-bold">
                Send Me a{" "}
                <span className="text-cyan-500">
                  Message
                </span>
              </h2>

              <p
                className={`text-sm mt-2 ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-500"
                }`}
              >
                Fill out the form and I'll get back to you
                as soon as possible.
              </p>

            </div>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 ${
                    darkMode
                      ? "bg-gray-900 border-gray-800 text-white placeholder-gray-600"
                      : "bg-gray-50 border-gray-200 text-black placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 ${
                    darkMode
                      ? "bg-gray-900 border-gray-800 text-white placeholder-gray-600"
                      : "bg-gray-50 border-gray-200 text-black placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 ${
                    darkMode
                      ? "bg-gray-900 border-gray-800 text-white placeholder-gray-600"
                      : "bg-gray-50 border-gray-200 text-black placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className={`w-full px-4 py-3 rounded-xl border outline-none resize-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 ${
                    darkMode
                      ? "bg-gray-900 border-gray-800 text-white placeholder-gray-600"
                      : "bg-gray-50 border-gray-200 text-black placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-20">

          <p
            className={`text-sm ${
              darkMode
                ? "text-gray-500"
                : "text-gray-500"
            }`}
          >
            I'm looking forward to hearing from you.
          </p>

          <div className="flex justify-center gap-2 mt-4">

            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

            <span className="w-2 h-2 rounded-full bg-cyan-500/60" />

            <span className="w-2 h-2 rounded-full bg-cyan-500/30" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;