const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative text-center px-6 z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 animate-fadeIn">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-200">
          Hi, I’m <span className="font-semibold">Mukhtiar Shah</span> — an Enterprise Backend & API Developer
          specializing in <strong>ASP.NET Core, PHP, scalable microservices, and full‑stack solutions</strong>.
          Explore my work, achievements, and projects below.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 animate-fadeIn delay-300">
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-white font-medium hover:bg-white hover:text-blue-600 transition-colors hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;