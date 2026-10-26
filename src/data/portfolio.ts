import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  Building2,
  ClipboardList,
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  LayoutTemplate,
  MessagesSquare,
  MonitorSmartphone,
  PackageCheck,
  Server,
  Terminal,
} from 'lucide-react'

import norbuildPreview from '../assets/projects/norbuild.jpg'
import ustaad360Preview from '../assets/projects/ustaad360.jpg'

/* ------------------------------------------------------------------
   Identity
------------------------------------------------------------------- */

export const profile = {
  name: 'Mukhtiar Shah',
  title: 'Full-Stack Developer | .NET & Modern Web Applications',
  heroEyebrow: 'Full-Stack Developer',
  heroHeadingLead: 'Building Digital Experiences That',
  heroHeadingAccent: 'Help Businesses Grow.',
  heroSupport:
    'I build modern business websites, responsive web interfaces, and practical backend solutions using modern web technologies and .NET. My focus is on creating useful, reliable digital products that solve real problems.',
  heroFocus: ['Full-Stack Development', 'ASP.NET Core & Backend APIs', 'Responsive Business Websites'],
} as const

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

/* ------------------------------------------------------------------
   Contact details — used by the header, hero, contact form and footer.
------------------------------------------------------------------- */

export const contact = {
  email: 'shahsaib256@gmail.com',
  emailHref: 'mailto:shahsaib256@gmail.com',
  whatsappLabel: '+92 343 665 6425',
  whatsappHref: 'https://wa.me/923436656425',
  whatsappNumber: '923436656425',
  heading: 'Let’s Build Something Useful',
  supporting:
    'Have a business website in mind, need help with a web application, or want to discuss a development opportunity? Send me a message and tell me what you are looking to build.',
  formNote:
    'This site has no backend, so nothing is stored or sent from here. The form below checks your details and then opens WhatsApp with the message already written — you send it yourself.',
} as const

/* ------------------------------------------------------------------
   About
------------------------------------------------------------------- */

export const about = {
  heading: 'A Developer Focused on Practical Solutions',
  paragraphs: [
    'I’m Mukhtiar Shah, a Computer Science graduate passionate about building useful software and helping businesses improve their digital presence.',
    'My work spans frontend interfaces, backend APIs, database-driven applications, and modular software systems. I enjoy turning requirements into practical solutions that are maintainable, responsive, and easy to use.',
    'Through my development projects and internship experience, I have worked with backend services, authentication, API integration, and modern web application technologies. I continue to strengthen my skills in the .NET ecosystem and full-stack development.',
  ],
}

export const education = {
  label: 'Education',
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  institution: 'University of Buner, Pakistan',
  icon: GraduationCap,
}

export const experience = {
  label: 'Experience',
  role: 'Software Development Internship',
  organisation: 'Markhor',
  detail:
    'Six-month software development internship at Markhor, involving backend development, authentication and error-logging microservices, and a modular web application.',
  icon: Briefcase,
}

/* ------------------------------------------------------------------
   Services
------------------------------------------------------------------- */

export type Service = {
  index: string
  title: string
  description: string
  features: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Business Websites',
    description:
      'Modern, responsive websites for small businesses, contractors, construction companies, and service providers.',
    features: [
      'Professional homepage and service pages',
      'Mobile-friendly layouts',
      'Contact forms and WhatsApp enquiries',
      'Clear calls to action',
      'Basic search-engine-friendly structure',
    ],
    icon: Building2,
  },
  {
    index: '02',
    title: 'Landing Pages',
    description:
      'Focused landing pages designed to communicate an offer, showcase services, and encourage enquiries.',
    features: [
      'Clear messaging and content hierarchy',
      'Responsive layouts',
      'Lead-generation calls to action',
      'Contact integration',
    ],
    icon: LayoutTemplate,
  },
  {
    index: '03',
    title: 'Backend & API Development',
    description: 'Backend services and APIs for web applications using the technologies I work with.',
    features: [
      'ASP.NET Core Web APIs',
      'Authentication and authorization',
      'Database integration',
      'API documentation and integration',
      'Modular backend development',
    ],
    icon: Server,
  },
  {
    index: '04',
    title: 'Custom Web Applications',
    description: 'Practical web applications designed around business requirements.',
    features: [
      'Dashboard interfaces',
      'CRUD workflows',
      'Database-driven features',
      'Role-based access concepts',
      'Frontend and backend integration',
    ],
    icon: LayoutDashboard,
  },
]

export const servicesCta = {
  prompt: 'Have a project in mind?',
  action: 'Let’s discuss it.',
} as const

/* ------------------------------------------------------------------
   Projects
------------------------------------------------------------------- */

export type ProjectLink = {
  label: string
  href: string
  external: boolean
}

export type Project = {
  id: string
  index: string
  category: string
  title: string
  label: string
  description: string
  features: string[]
  stack: string[]
  preview: string
  previewAlt: string
  links: ProjectLink[]
  note: string
}

export const projects: Project[] = [
  {
    id: 'norbuild-construction',
    index: '01',
    category: 'Business Website / Construction',
    title: 'Norbuild Construction',
    label: 'Portfolio demonstration — not a client commission',
    description:
      'A construction-company website concept designed to present services, communicate professionalism, and make it easy for potential customers to enquire about projects.',
    features: [
      'Construction-focused business presentation',
      'Responsive website layout',
      'Service-oriented content sections',
      'Contact and WhatsApp enquiry flow',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS'],
    preview: norbuildPreview,
    previewAlt:
      'Screenshot of the Norbuild Construction concept website, showing its header, headline and project gallery.',
    links: [
      { label: 'Live Demo', href: 'https://norbuild-construction.vercel.app/', external: true },
      { label: 'Source Code', href: 'https://github.com/MUKHTIARSHAH/Norbuild-Construction', external: true },
    ],
    note: 'A self-directed concept build used as a portfolio demonstration. It is not affiliated with, or commissioned by, any real construction company.',
  },
  {
    id: 'ustaad360',
    index: '02',
    category: 'Service Marketplace / Web Application',
    title: 'Ustaad360',
    label: 'Frontend demonstration',
    description:
      'A frontend demonstration for a service marketplace concept designed to connect customers with technicians and make service discovery more accessible.',
    features: [
      'Service marketplace interface',
      'Customer-oriented experience',
      'Structured presentation of services',
      'Responsive frontend experience',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    preview: ustaad360Preview,
    previewAlt:
      'Screenshot of the Ustaad360 service marketplace frontend, showing its landing section and service categories.',
    links: [{ label: 'Live Demo', href: 'https://ustaad360-frontend.vercel.app/', external: true }],
    note: 'The public link is a frontend demonstration. It does not include a verified production backend, so payment, authentication and chat features are not part of the deployed demo.',
  },
]

/* ------------------------------------------------------------------
   Skills
------------------------------------------------------------------- */

export type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['C#', 'PHP', 'ASP.NET Core', 'REST APIs', 'Authentication and authorization', 'Microservices concepts'],
  },
  {
    title: 'Frontend Development',
    icon: MonitorSmartphone,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'Entity Framework Core'],
  },
  {
    title: 'Developer Tools',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'Postman', 'Vite'],
  },
]

export const skillsNote =
  'These are technologies I have worked with rather than proficiency ratings. Microservices concepts and some backend areas are things I am still building depth in, and I would rather say that than overstate them.'

/* ------------------------------------------------------------------
   Working process
------------------------------------------------------------------- */

export type ProcessStep = {
  index: string
  title: string
  description: string
  icon: LucideIcon
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Understand',
    description: 'Discuss the business, goals, requirements, and target users.',
    icon: MessagesSquare,
  },
  {
    index: '02',
    title: 'Plan',
    description: 'Agree on the scope, features, structure, and priorities.',
    icon: ClipboardList,
  },
  {
    index: '03',
    title: 'Build',
    description: 'Develop the website or application and test the important workflows.',
    icon: Code2,
  },
  {
    index: '04',
    title: 'Deliver',
    description: 'Review the result, address agreed changes, and prepare the project for handover.',
    icon: PackageCheck,
  },
]

/* ------------------------------------------------------------------
   Footer
------------------------------------------------------------------- */

export const footerStatement =
  'Building practical websites and web applications for businesses that need a clear, professional presence online.'
