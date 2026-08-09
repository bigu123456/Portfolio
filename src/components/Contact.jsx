import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = ({ darkMode }) => {
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
          Contact Me
        </h1>

        <p
          className={`text-center mt-2 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Have a project in mind or want to work together? Feel free to get
          in touch.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-cyan-400">
              Get In Touch
            </h2>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-500 text-2xl" />
              <span>acharyabigu@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-500 text-2xl" />
              <span>9810205962</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-500 text-2xl" />
              <span>Kathmandu, Nepal</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-3xl mt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className={`p-8 rounded-xl space-y-6 shadow-lg ${
              darkMode
                ? "bg-gray-900"
                : "bg-gray-100 border border-gray-300"
            }`}
          >
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full p-3 rounded-lg border outline-none transition ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-500"
              }`}
            />

            <input
              type="email"
              placeholder="Your Email"
              className={`w-full p-3 rounded-lg border outline-none transition ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-500"
              }`}
            />

            <input
              type="text"
              placeholder="Subject"
              className={`w-full p-3 rounded-lg border outline-none transition ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-500"
              }`}
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className={`w-full p-3 rounded-lg border outline-none resize-none transition ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-500"
              }`}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;