const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <p className="text-xl">Hi, I'm</p>

        <h1 className="text-6xl font-bold text-cyan-500">
          Bigu
        </h1>

        <h2 className="text-3xl mt-4">
          Frontend React Developer
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-gray-400">
          I create modern, responsive, and user-friendly web
          applications using React, JavaScript, and Tailwind CSS.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg">
            Hire Me
          </button>

          <button className="border border-cyan-500 px-6 py-3 rounded-lg">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;