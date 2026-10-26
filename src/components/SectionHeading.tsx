type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="bg-copper h-px w-8" aria-hidden="true" />
        <span className="eyebrow text-copper">{eyebrow}</span>
      </div>

      <h2 id={id} className="display display-lg text-cream mt-4 text-balance">
        {title}
      </h2>

      {description ? <p className="text-muted mt-4 max-w-2xl text-base leading-relaxed">{description}</p> : null}
    </div>
  )
}
