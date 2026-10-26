import type { ReactNode } from 'react'
import { Lock } from 'lucide-react'

type BrowserFrameProps = {
  url: string
  children: ReactNode
}

/** Simple browser chrome used to frame the project previews. */
export function BrowserFrame({ url, children }: BrowserFrameProps) {
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <div className="border-line bg-surface overflow-hidden rounded-xl border">
      <div className="frame-bar">
        <span className="frame-dot bg-line" aria-hidden="true" />
        <span className="frame-dot bg-line" aria-hidden="true" />
        <span className="frame-dot bg-line" aria-hidden="true" />
        <span className="border-line-soft bg-charcoal text-dim ml-2 flex min-w-0 flex-1 items-center gap-1.5 rounded-md border px-3 py-1 text-[0.7rem]">
          <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />
          <span className="truncate">{displayUrl}</span>
        </span>
      </div>
      {children}
    </div>
  )
}
