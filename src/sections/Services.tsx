import { ArrowRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { services, servicesCta } from '../data/portfolio'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="What I Can Build for You"
            description="Four areas I focus on. Each one starts with a conversation about what the business actually needs."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map(({ index, title, description, features, icon: Icon }, i) => (
            <Reveal key={index} delay={i * 70} className="h-full">
              <article className="panel hover:border-copper/40 flex h-full flex-col p-6 transition-colors duration-300 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="border-line-soft bg-charcoal text-copper grid h-11 w-11 place-items-center rounded-lg border">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-dim text-sm font-medium">{index}</span>
                </div>

                <h3 className="text-cream font-display mt-5 text-lg font-semibold">{title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>

                <ul className="mt-5 space-y-2.5">
                  {features.map((feature) => (
                    <li key={feature} className="text-muted flex gap-3 text-sm">
                      <span className="bg-copper/60 mt-2.5 h-px w-3 shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="border-line mt-12 flex flex-col items-start gap-5 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-cream font-display text-lg font-semibold">
              {servicesCta.prompt} <span className="text-copper">{servicesCta.action}</span>
            </p>
            <a href="#contact" className="btn btn-secondary">
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
