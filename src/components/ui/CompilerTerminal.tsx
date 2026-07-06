import { Terminal } from '@/components/ui/Terminal'
import type { CompilerDemoStep } from '@/data/projects'

interface CompilerTerminalProps {
  steps: CompilerDemoStep[]
  runLabel: string
}

/** Terminal simulada con pasos con forma de comando + líneas de salida de consola. */
export function CompilerTerminal({ steps, runLabel }: CompilerTerminalProps) {
  return (
    <Terminal
      runLabel={runLabel}
      steps={steps.map((step) => ({
        command: (
          <>
            <span className="text-emerald-400">$</span> {step.command}
          </>
        ),
        output: step.output.map((line, i) => <div key={i}>{line}</div>),
      }))}
    />
  )
}
