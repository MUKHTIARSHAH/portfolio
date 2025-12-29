import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shahsaib256@gmail.com",
    href: "mailto:shahsaib256@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 333 9694256",
    href: "tel:+923339694256",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MUKHTIARSHAH",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mukhtiar-shah-4567221aa/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:shahsaib256@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contacts"
      className="py-24 scroll-mt-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to collaboration, knowledge sharing, and new opportunities. 
              Whether it's backend architecture, API development, or full-stack projects, 
              feel free to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-display font-semibold mb-6 text-blue-600">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/50 backdrop-blur-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/50 backdrop-blur-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="bg-white/50 backdrop-blur-md"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-white/50 backdrop-blur-md resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform shadow-lg"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Inspiring Quote */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-100/50 to-purple-100/50 shadow-md">
                <p className="text-lg leading-relaxed italic text-gray-700">
                  "I'm always open to collaboration, knowledge sharing, and new opportunities. 
                  Whether it's backend architecture, API development, or full-stack projects, 
                  feel free to reach out and let's build something impactful together."
                </p>
                <p className="mt-4 font-medium text-blue-600">— Mukhtiar Shah</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-md shadow hover:shadow-lg transition"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100">
                      <info.icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl bg-white/70 backdrop-blur-md shadow-md">
                <h4 className="font-semibold mb-4 text-blue-600">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;