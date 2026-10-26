import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { about, education, experience } from '../data/portfolio'

const blocks = [
  {
    label: education.label,
    heading: education.degree,
    subheading: education.institution,
    detail: null as string | null,
    Icon: education.icon,
  },
  {
    label: experience.label,
    heading: experience.role,
    subheading: experience.organisation,
    detail: experience.detail,
    Icon: experience.icon,
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading id="about-heading" eyebrow="About" title={about.heading} />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="min-w-0 space-y-5 lg:col-span-7">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-muted text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={100} className="min-w-0 space-y-4 lg:col-span-5">
            {blocks.map(({ label, heading, subheading, detail, Icon }) => (
              <article key={label} className="panel hover:border-copper/40 p-6 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <span className="border-line-soft bg-charcoal text-copper grid h-11 w-11 shrink-0 place-items-center rounded-lg border">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-dim">{label}</p>
                    <h3 className="text-cream font-display mt-2 text-base leading-snug font-semibold">{heading}</h3>
                    <p className="text-copper mt-1 text-sm">{subheading}</p>
                    {detail ? <p className="text-muted mt-3 text-sm leading-relaxed">{detail}</p> : null}
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
