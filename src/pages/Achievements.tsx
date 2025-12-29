import { Award, CheckCircle, Code, Zap } from "lucide-react";

const achievements = [
  {
    icon: Code,
    number: "36+",
    title: "Production APIs",
    description:
      "Developed and deployed production-ready APIs with secure authentication and RBAC authorization.",
  },
  {
    icon: Zap,
    number: "Real-Time",
    title: "SignalR Notifications",
    description:
      "Built real-time job notifications using SignalR in Ustaad360 Backend for instant updates.",
  },
  {
    icon: Award,
    number: "Certified",
    title: "Web Developer",
    description:
      "HTML, CSS, and JavaScript for Web Developers (Johns Hopkins University, Coursera).",
  },
  {
    icon: CheckCircle,
    number: "Modular",
    title: "Microservices Design",
    description:
      "Designed modular microservices for authentication and error logging at Markhor ICT.",
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Achievements</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Career Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones and accomplishments throughout my software engineering journey.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                    <achievement.icon size={28} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-display font-bold text-blue-600 mb-1">
                      {achievement.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Months Experience", value: "7+" },
              { label: "Projects Completed", value: "5+" },
              { label: "Technologies", value: "5+" },
              { label: "Happy Clients", value: "5+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition"
              >
                <div className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;