import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillCategories, skillsNote } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="Technologies I Work With"
            description="Grouped by where they sit in an application. No ratings and no percentages — just the technologies behind the projects above."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ title, icon: Icon, skills }, index) => (
            <Reveal key={title} delay={index * 70} className="h-full">
              <article className="panel hover:border-copper/40 h-full overflow-hidden transition-colors duration-300">
                <div className="border-line-soft flex items-center gap-2.5 border-b px-5 py-4">
                  <Icon className="text-copper h-4 w-4 shrink-0" aria-hidden="true" />
                  <h3 className="text-cream text-sm font-semibold">{title}</h3>
                </div>

                <ul className="divide-line-soft divide-y">
                  {skills.map((skill) => (
                    <li key={skill} className="text-muted px-5 py-3 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="border-line text-dim mt-10 max-w-3xl border-l pl-5 text-sm leading-relaxed">{skillsNote}</p>
        </Reveal>
      </div>
    </section>
  )
}
