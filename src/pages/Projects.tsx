import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Ustaad360 Backend",
    category: "API Development",
    description:
      "ASP.NET Core Web API powering a service marketplace with JWT authentication, technician onboarding, job lifecycle management, reviews system, and real-time SignalR notifications.",
    technologies: ["ASP.NET Core", "SQL Server", "JWT", "SignalR", "Entity Framework"],
    featured: true,
    github: "", // add link later
    demo: "",   // add link later
  },
  {
    title: "ASP.NET MVC Web Application",
    category: "Full Stack",
    description:
      "Secure authentication & authorization workflows with CRUD features using Entity Framework, keyword-based search functionality, and comprehensive user management.",
    technologies: ["ASP.NET MVC", "Entity Framework", "C#", "SQL Server", "Bootstrap"],
    featured: false,
    github: "https://github.com/MUKHTIARSHAH/JokesWebApp",
    demo: "", // add link later
  },
  {
    title: "E-Commerce Web Application",
    category: "Full Stack",
    description:
      "Complete e-commerce solution featuring product catalog, shopping cart, order processing, AI-powered recommendations, and smart search capabilities.",
    technologies: ["PHP", "React.js", "MySQL", "AI/ML", "REST APIs", "Stripe"],
    featured: true,
    github: "https://github.com/MUKHTIARSHAH/modern-ecommerce-app",
    demo: "", // add link later
  },
  {
    title: "Travel Agency Website",
    category: "Web Development",
    description:
      "Responsive booking system with secure form handling, backend database management, and seamless user experience for travel inquiries and reservations.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    featured: false,
    github: "", // add link later
    demo: "",   // add link later
  },
  {
    title: "Modular Backend Deployment",
    category: "Backend Development",
    description:
      "Successfully coded and deployed a modular backend system supporting both mobile and web platforms. Emphasizes scalability, security, and clear documentation with 192+ API endpoints, JWT authentication, RBAC authorization, Swagger UI integration, and microservices for Auth and Error Logging.",
    technologies: ["PHP", "MySQL", "REST APIs"],
    featured: true,
    github: "", // add link later
    demo: "",   // add link later
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work building scalable applications and robust backend systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-200 text-purple-700">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="gap-2 hover:bg-blue-50">
                      <a
                        href={project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform">
                      <a
                        href={project.demo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="hover:bg-blue-50">
              <a
                href="https://github.com/MUKHTIARSHAH"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;