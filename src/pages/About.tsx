import { Code, Database, Server, Shield } from "lucide-react";

const skills = [
  // Backend & Architecture
  { icon: Server, label: "ASP.NET Core" },
  { icon: Server, label: "Core PHP / RESTful APIs" },
  { icon: Server, label: "Microservices Architecture" },
  { icon: Shield, label: "JWT / RBAC" },

  // Languages
  { icon: Code, label: "C# / PHP" },
  { icon: Code, label: "JavaScript / Python / C++" },
  { icon: Code, label: "HTML5 / CSS3" },

  // Frontend
  { icon: Code, label: "Bootstrap / Responsive Design" },

  // Databases
  { icon: Database, label: "SQL Server" },
  { icon: Database, label: "MySQL / SQL Queries" },
  { icon: Database, label: "Database Design / JSON" },

  // Tools & Utilities
  { icon: Server, label: "Postman / cURL / Git" },
  { icon: Server, label: "XAMPP / EasyDB" },

  // AI/ML Features
  { icon: Shield, label: "Recommendation Systems / Smart Search" },

  // Collaboration
  { icon: Shield, label: "GitHub / Agile / Code Reviews" },
  { icon: Shield, label: "Remote Teamwork" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Passionate About
              <span className="block">Scalable Solutions</span>
            </h2>
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              I'm a results-driven Software Engineer passionate about building secure, scalable, and user-focused applications. 
              With expertise in backend development and full-stack capabilities, I craft solutions that make a real impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              My focus extends beyond just writing code — I'm committed to creating maintainable codebases, improving developer onboarding experiences, 
              and contributing to the community through knowledge sharing.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100">
                  <skill.icon size={20} className="text-blue-600" />
                </div>
                <span className="font-medium text-gray-800">{skill.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="p-6 rounded-xl bg-white/70 backdrop-blur-md shadow-md text-center">
            <h4 className="font-semibold mb-4 text-blue-600">Core Expertise</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "ASP.NET Core",
                "PHP",
                "C#",
                "SQL Server",
                "MySQL",
                "RESTful APIs",
                "Microservices",
                "JWT Authentication",
                "RBAC Authorization",
                "Entity Framework",
                "SignalR",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;