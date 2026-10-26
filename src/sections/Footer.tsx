import { Mail, MessageCircle } from 'lucide-react'
import { contact, footerStatement, navItems, profile } from '../data/portfolio'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-line-soft border-t">
      <div className="shell py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-cream font-display text-base font-bold">
              {profile.name}
              <span className="text-copper">.</span>
            </p>
            <p className="text-dim mt-2 text-sm">{profile.title}</p>
            <p className="text-muted mt-5 max-w-sm text-sm leading-relaxed">{footerStatement}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="eyebrow text-dim">Sections</p>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted hover:text-copper text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-dim">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={contact.emailHref}
                  className="text-muted hover:text-copper flex items-center gap-2.5 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-copper flex items-center gap-2.5 text-sm transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">WhatsApp — {contact.whatsappLabel}</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-line-soft text-dim mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Mukhtiar Shah. All rights reserved.</p>
          <p>Built with React, TypeScript, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
