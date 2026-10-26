import { Layers, MonitorSmartphone, Server } from 'lucide-react'
import { profile } from '../data/portfolio'

type Tone = 'comment' | 'keyword' | 'type' | 'plain'

type Token = {
  text: string
  tone: Tone
}

/** A small, realistic snippet from the kind of backend code I write. */
const codeLines: Token[][] = [
  [{ text: '// Services/ProjectService.cs', tone: 'comment' }],
  [
    { text: 'public async ', tone: 'keyword' },
    { text: 'Task', tone: 'type' },
    { text: '<', tone: 'plain' },
    { text: 'IReadOnlyList', tone: 'type' },
    { text: '<', tone: 'plain' },
    { text: 'ProjectDto', tone: 'type' },
    { text: '>> ', tone: 'plain' },
    { text: 'GetAllAsync', tone: 'plain' },
    { text: '()', tone: 'plain' },
  ],
  [{ text: '{', tone: 'plain' }],
  [
    { text: '    return await ', tone: 'keyword' },
    { text: '_db.Projects', tone: 'plain' },
  ],
  [
    { text: '        .', tone: 'plain' },
    { text: 'AsNoTracking', tone: 'plain' },
    { text: '()', tone: 'plain' },
  ],
  [
    { text: '        .', tone: 'plain' },
    { text: 'Select', tone: 'plain' },
    { text: '(p => ', tone: 'plain' },
    { text: 'new ProjectDto', tone: 'type' },
    { text: '(p.Id, p.Title))', tone: 'plain' },
  ],
  [
    { text: '        .', tone: 'plain' },
    { text: 'ToListAsync', tone: 'plain' },
    { text: '();', tone: 'plain' },
  ],
  [{ text: '}', tone: 'plain' }],
]

const toneClass: Record<Tone, string> = {
  comment: 'text-dim',
  keyword: 'text-copper',
  type: 'text-cream',
  plain: 'text-muted',
}

const focusIcons = [Layers, Server, MonitorSmartphone]

export function HeroPanel() {
  return (
    <div className="border-line bg-surface overflow-hidden rounded-xl border">
      <div className="frame-bar">
        <span className="frame-dot bg-line" aria-hidden="true" />
        <span className="frame-dot bg-line" aria-hidden="true" />
        <span className="frame-dot bg-line" aria-hidden="true" />
        <span className="text-dim ml-2 truncate text-[0.7rem]">{profile.name} — developer profile</span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <span className="border-copper/40 bg-copper/10 text-copper font-display grid h-12 w-12 shrink-0 place-items-center rounded-lg border text-sm font-bold">
            MS
          </span>
          <div className="min-w-0">
            <p className="text-cream font-display truncate text-base font-semibold">{profile.name}</p>
            <p className="text-muted truncate text-sm">Full-Stack Developer · .NET</p>
          </div>
        </div>

        <div className="hairline my-6" />

        <ul className="space-y-4">
          {profile.heroFocus.map((focus, index) => {
            const Icon = focusIcons[index] ?? Layers
            return (
              <li key={focus} className="flex items-center gap-3.5">
                <span className="border-line-soft bg-charcoal text-copper grid h-9 w-9 shrink-0 place-items-center rounded-lg border">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-cream text-sm font-medium">{focus}</span>
              </li>
            )
          })}
        </ul>

        <div className="hairline my-6" />

        <div className="border-line-soft bg-charcoal overflow-hidden rounded-lg border">
          <pre className="overflow-x-auto px-4 py-4 text-[0.72rem] leading-6">
            <code>
              {codeLines.map((line, lineIndex) => (
                <span key={lineIndex} className="block whitespace-pre">
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} className={toneClass[token.tone]}>
                      {token.text}
                    </span>
                  ))}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
