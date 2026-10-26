import { useState } from 'react'
import { ArrowUpRight, Check, Code2 } from 'lucide-react'
import { BrowserFrame } from './BrowserFrame'
import type { Project } from '../data/portfolio'

/** Deliberate designed fallback — shown only if the preview image cannot load. */
function PreviewFallback({ title }: { title: string }) {
  return (
    <div className="bg-ink flex h-full w-full flex-col p-5">
      <div className="flex items-center gap-2">
        <span className="bg-copper h-2.5 w-2.5 rounded-sm" aria-hidden="true" />
        <span className="bg-line h-2 w-16 rounded-full" aria-hidden="true" />
        <span className="bg-line ml-auto h-2 w-10 rounded-full" aria-hidden="true" />
      </div>

      <div className="mt-6 space-y-2.5">
        <span className="bg-cream/20 block h-4 w-3/5 rounded" aria-hidden="true" />
        <span className="bg-cream/10 block h-4 w-2/5 rounded" aria-hidden="true" />
        <span className="bg-line mt-4 block h-2 w-4/5 rounded-full" aria-hidden="true" />
        <span className="bg-line block h-2 w-3/5 rounded-full" aria-hidden="true" />
      </div>

      <div className="mt-auto pt-8">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((key) => (
            <span key={key} className="bg-line/60 block h-10 rounded-lg" aria-hidden="true" />
          ))}
        </div>
        <p className="text-dim mt-4 text-[0.75rem]">{title} — preview unavailable</p>
      </div>
    </div>
  )
}

function ProjectPreview({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <PreviewFallback title={project.title} />
  }

  return (
    <img
      src={project.preview}
      alt={project.previewAlt}
      width={1280}
      height={800}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="block h-full w-full object-cover object-top"
    />
  )
}

type ProjectCardProps = {
  project: Project
  reversed: boolean
}

export function ProjectCard({ project, reversed }: ProjectCardProps) {
  const primaryLink = project.links[0]
  const secondaryLinks = project.links.slice(1)

  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={`min-w-0 lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
        <BrowserFrame url={primaryLink.href}>
          <div className="bg-ink relative aspect-[16/10] w-full overflow-hidden">
            <ProjectPreview project={project} />
          </div>
        </BrowserFrame>
      </div>

      <div className={`min-w-0 lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-baseline gap-4">
          <span className="display text-copper text-3xl" aria-hidden="true">
            {project.index}
          </span>
          <span className="eyebrow text-dim">{project.category}</span>
        </div>

        <h3 className="display text-cream mt-4 text-2xl sm:text-3xl">{project.title}</h3>

        <p className="border-copper/40 bg-copper/10 text-copper mt-4 inline-flex rounded-full border px-3 py-1 text-[0.7rem] font-medium">
          {project.label}
        </p>

        <p className="text-muted mt-5 text-sm leading-relaxed">{project.description}</p>

        <ul className="mt-6 space-y-2.5">
          {project.features.map((feature) => (
            <li key={feature} className="text-muted flex gap-3 text-sm">
              <Check className="text-copper mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <li key={technology} className="tag">
              {technology}
            </li>
          ))}
        </ul>

        <p className="border-line text-dim mt-5 border-l pl-4 text-xs leading-relaxed">{project.note}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label={`${primaryLink.label} — ${project.title} (opens in a new tab)`}
          >
            {primaryLink.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {secondaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label={`${link.label} — ${project.title} (opens in a new tab)`}
            >
              {/source/i.test(link.label) ? <Code2 className="h-4 w-4" aria-hidden="true" /> : null}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
