import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected Work"
            title="Projects you can open and try"
            description="Both previews below are screenshots of the live sites. Each project is labelled for exactly what it is — one is a concept build, the other is a frontend demonstration."
          />
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} reversed={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
