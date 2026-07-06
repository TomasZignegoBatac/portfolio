import { Terminal } from '@/components/ui/Terminal'
import type { ApiDemoStep } from '@/data/projects'

const METHOD_COLORS: Record<string, string> = {
  GET: 'text-sky-400',
  POST: 'text-emerald-400',
  PUT: 'text-amber-400',
  DELETE: 'text-rose-400',
}

interface RequestTerminalProps {
  steps: ApiDemoStep[]
  runLabel: string
}

/** Terminal simulada con pasos con forma de request/response HTTP. */
export function RequestTerminal({ steps, runLabel }: RequestTerminalProps) {
  return (
    <Terminal
      runLabel={runLabel}
      steps={steps.map((step) => ({
        command: (
          <>
            <span className="text-emerald-400">$</span> curl -X{' '}
            <span className={METHOD_COLORS[step.method] ?? 'text-white'}>{step.method}</span>{' '}
            {step.path}
            {step.body ? ` -d '${step.body}'` : ''}
          </>
        ),
        output: (
          <>
            → {step.status} · {step.response}
          </>
        ),
      }))}
    />
  )
}
