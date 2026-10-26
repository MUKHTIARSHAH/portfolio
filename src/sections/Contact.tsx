import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { EnquiryForm } from '../components/EnquiryForm'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { contact } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title={contact.heading}
            description={contact.supporting}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="min-w-0 space-y-4 lg:col-span-5">
            <a
              href={contact.emailHref}
              className="border-line bg-surface hover:border-copper group flex items-center gap-4 rounded-xl border p-5 transition-colors"
            >
              <span className="border-line-soft bg-charcoal text-copper grid h-12 w-12 shrink-0 place-items-center rounded-lg border">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="eyebrow text-dim block">Email</span>
                <span className="text-cream group-hover:text-copper mt-1.5 block truncate text-sm font-medium transition-colors sm:text-base">
                  {contact.email}
                </span>
              </span>
              <ArrowUpRight className="text-dim group-hover:text-copper h-5 w-5 shrink-0 transition-colors" aria-hidden="true" />
            </a>

            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border-line bg-surface hover:border-copper group flex items-center gap-4 rounded-xl border p-5 transition-colors"
            >
              <span className="border-line-soft bg-charcoal text-copper grid h-12 w-12 shrink-0 place-items-center rounded-lg border">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="eyebrow text-dim block">WhatsApp</span>
                <span className="text-cream group-hover:text-copper mt-1.5 block truncate text-sm font-medium transition-colors sm:text-base">
                  {contact.whatsappLabel}
                </span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
              <ArrowUpRight className="text-dim group-hover:text-copper h-5 w-5 shrink-0 transition-colors" aria-hidden="true" />
            </a>

            <p className="border-line text-dim border-l pl-5 text-sm leading-relaxed">{contact.formNote}</p>
          </Reveal>

          <Reveal delay={100} className="min-w-0 lg:col-span-7">
            <div className="panel p-6 sm:p-8">
              <h3 className="text-cream font-display text-lg font-semibold">Start an enquiry</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Fill this in and I will open WhatsApp with your message ready to send.
              </p>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
