import mukhtiarPhoto from "@/assets/mukhtiar.jpeg";
import ProjectsSection from "@/pages/Projects";
import AchievementsSection from "@/pages/Achievements";
import ContactSection from "@/pages/Contact";
import AboutSection from "@/pages/About"; // new modular about section

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900">
      {/* Fixed Navbar */}
      <header className="bg-white/70 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Mukhtiar Shah
          </h1>
          <nav className="space-x-6 font-medium">
            <a href="#home" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-600 transition">Home</a>
            <a href="#achievements" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-600 transition">Achievements</a>
            <a href="#projects" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-600 transition">Projects</a>
            <a href="#contacts" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-600 transition">Contacts</a>
            <a href="#about" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-600 transition">About</a>
          </nav>
        </div>
      </header>

      {/* Page content wrapper with top padding to avoid overlap under fixed header */}
      <main className="pt-24">
        {/* Hero Section (Home) */}
        <section
          id="home"
          className="scroll-mt-24 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl shadow-lg"
        >
          {/* Left: Title + Description */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            {/* Warm Greeting */}
            <p className="text-lg font-medium text-blue-700 animate-pulse">
              👋 Welcome, glad to have you here!
            </p>

            {/* Updated Title */}
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Full-Stack Developer | ASP.NET & PHP | Microservices | API & Database Specialist
            </h1>

            {/* Short Noticeable Description */}
            <p className="text-gray-700 leading-relaxed font-medium">
              Passionate full‑stack developer specializing in ASP.NET Core and PHP, with expertise in microservices, secure APIs, and database design. I build scalable systems that empower teams and deliver exceptional user experiences.
            </p>

            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </div>

          {/* Right: Photo */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={mukhtiarPhoto}
              alt="Mukhtiar Shah"
              className="w-64 h-64 rounded-full shadow-2xl border-4 border-blue-600 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </section>

        {/* Achievements Section (modular) */}
        <section id="achievements" className="scroll-mt-24 mt-16">
          <AchievementsSection />
        </section>

        {/* Projects Section (modular) */}
        <section id="projects" className="scroll-mt-24 mt-16">
          <ProjectsSection />
        </section>

        {/* Contacts Section (modular) */}
        <section id="contacts" className="scroll-mt-24 mt-16">
          <ContactSection />
        </section>

        {/* About Section (modular) */}
        <section id="about" className="scroll-mt-24 mt-16">
          <AboutSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
          © {new Date().getFullYear()} Mukhtiar Shah. All rights reserved.
        </div>
      </footer>
    </div>
  );
}