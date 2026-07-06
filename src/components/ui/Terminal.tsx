import { useState, type ReactNode } from 'react'

export interface TerminalStep {
  command: ReactNode
  output: ReactNode
}

interface TerminalProps {
  steps: TerminalStep[]
  runLabel: string
}

/** Shell genérico de terminal simulada: revela pasos de a uno al presionar "Ejecutar". */
export function Terminal({ steps, runLabel }: TerminalProps) {
  const [revealed, setRevealed] = useState(0)
  const [running, setRunning] = useState(false)

  const run = () => {
    if (running) return
    setRunning(true)
    setRevealed(0)
    steps.forEach((_, i) => {
      setTimeout(
        () => {
          setRevealed(i + 1)
          if (i === steps.length - 1) setRunning(false)
        },
        (i + 1) * 650,
      )
    })
  }

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-[#0b0d12] dark:border-white/10">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>

      <div className="min-h-56 p-4 font-mono text-[13px] leading-relaxed">
        {steps.slice(0, revealed).map((step, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <div className="text-white/50">{step.command}</div>
            <div className="text-white/80">{step.output}</div>
          </div>
        ))}

        {revealed === 0 && <div className="text-white/30">$ _</div>}

        <button
          type="button"
          onClick={run}
          disabled={running}
          className="mt-3 rounded-md border border-white/15 px-3 py-1.5 font-sans text-xs font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white disabled:opacity-40"
        >
          {running ? '...' : runLabel}
        </button>
      </div>
    </div>
  )
}
