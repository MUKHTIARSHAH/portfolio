import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { processSteps } from '../data/portfolio'

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="Working Process"
            title="From Idea to Implementation"
            description="A simple four-step path from the first conversation to a finished, handover-ready project."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map(({ index, title, description, icon: Icon }, i) => (
            <Reveal key={index} delay={i * 70}>
              <div className="border-line relative border-t pt-6">
                <span className="bg-copper absolute -top-[3px] left-0 h-1.5 w-1.5 rounded-full" aria-hidden="true" />

                <div className="flex items-center gap-3">
                  <span className="text-copper text-sm font-semibold">{index}</span>
                  <Icon className="text-dim h-4 w-4" aria-hidden="true" />
                </div>

                <h3 className="text-cream font-display mt-3 text-lg font-semibold">{title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="border-line text-dim mt-12 max-w-3xl border-l pl-5 text-sm leading-relaxed">
            Scope, timeline and any revision rounds are agreed in writing before development starts, so there are no
            surprises on either side.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
