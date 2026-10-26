import { ArrowDown, MessageCircle } from 'lucide-react'
import { HeroPanel } from '../components/HeroPanel'
import { contact, profile } from '../data/portfolio'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="bg-copper h-px w-8" aria-hidden="true" />
              <span className="eyebrow text-copper">{profile.heroEyebrow}</span>
            </div>

            <h1 id="hero-heading" className="display display-xl text-cream mt-5 text-balance">
              {profile.heroHeadingLead} <span className="text-copper">{profile.heroHeadingAccent}</span>
            </h1>

            <p className="text-muted mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
              {profile.heroSupport}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Discuss Your Project
                <span className="sr-only">(opens WhatsApp in a new tab)</span>
              </a>

              <a href="#projects" className="btn btn-secondary">
                Explore My Work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <HeroPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
