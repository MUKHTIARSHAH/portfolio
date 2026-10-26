import { useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { AlertCircle, MessageCircle } from 'lucide-react'
import { contact } from '../data/portfolio'

type FieldName = 'name' | 'email' | 'details'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const fieldOrder: FieldName[] = ['name', 'email', 'details']

const initialValues: Values = { name: '', email: '', details: '' }

const fieldClass =
  'bg-charcoal border-line text-cream placeholder:text-dim focus:border-copper mt-2 w-full rounded-lg border px-4 py-3 text-sm transition-colors'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null
  }

  return (
    <p id={id} className="text-copper mt-2 flex items-center gap-1.5 text-xs">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

/**
 * Honest enquiry form: it has no backend to post to, so it validates the
 * details locally and then opens WhatsApp with the message already written.
 */
export function EnquiryForm() {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [opened, setOpened] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const detailsRef = useRef<HTMLTextAreaElement>(null)
  const fieldRefs = { name: nameRef, email: emailRef, details: detailsRef }

  function handleChange(field: FieldName) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
    }
  }

  function validate(): Errors {
    const next: Errors = {}

    if (!values.name.trim()) {
      next.name = 'Please enter your name.'
    }

    if (!values.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!emailPattern.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }

    if (!values.details.trim()) {
      next.details = 'Please describe what you would like to build.'
    }

    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    const firstInvalid = fieldOrder.find((field) => nextErrors[field])
    if (firstInvalid) {
      setOpened(false)
      fieldRefs[firstInvalid].current?.focus()
      return
    }

    const message = [
      'Hello Mukhtiar,',
      '',
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      '',
      'Project details:',
      values.details.trim(),
    ].join('\n')

    window.open(`${contact.whatsappHref}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setOpened(true)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
      <div>
        <label htmlFor="enquiry-name" className="text-cream block text-sm font-medium">
          Name
        </label>
        <input
          id="enquiry-name"
          ref={nameRef}
          type="text"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
          placeholder="Your name"
          className={`${fieldClass} ${errors.name ? 'border-copper' : ''}`}
        />
        <FieldError id="enquiry-name-error" message={errors.name} />
      </div>

      <div>
        <label htmlFor="enquiry-email" className="text-cream block text-sm font-medium">
          Email
        </label>
        <input
          id="enquiry-email"
          ref={emailRef}
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange('email')}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
          placeholder="you@example.com"
          className={`${fieldClass} ${errors.email ? 'border-copper' : ''}`}
        />
        <FieldError id="enquiry-email-error" message={errors.email} />
      </div>

      <div>
        <label htmlFor="enquiry-details" className="text-cream block text-sm font-medium">
          Project details
        </label>
        <textarea
          id="enquiry-details"
          ref={detailsRef}
          name="details"
          rows={5}
          value={values.details}
          onChange={handleChange('details')}
          aria-invalid={errors.details ? true : undefined}
          aria-describedby={errors.details ? 'enquiry-details-error' : undefined}
          placeholder="Briefly describe the website or application you have in mind, and what it needs to do."
          className={`${fieldClass} resize-y ${errors.details ? 'border-copper' : ''}`}
        />
        <FieldError id="enquiry-details-error" message={errors.details} />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Continue on WhatsApp
        </button>
        <p className="text-dim text-xs leading-relaxed">
          Opens WhatsApp with your details filled in. Nothing is sent from this page.
        </p>
      </div>

      {opened ? (
        <p
          role="status"
          className="border-copper/40 bg-copper/10 text-cream flex gap-3 rounded-lg border px-4 py-3 text-sm leading-relaxed"
        >
          <MessageCircle className="text-copper mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            WhatsApp should now be open in a new tab with your enquiry written out — press send there to deliver it. If
            nothing opened, use the WhatsApp button above or email{' '}
            <a href={contact.emailHref} className="text-copper underline underline-offset-4">
              {contact.email}
            </a>
            .
          </span>
        </p>
      ) : null}
    </form>
  )
}
