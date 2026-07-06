import { useEffect, useRef, type MouseEvent } from 'react'
import { X } from 'lucide-react'
import { RequestTerminal } from '@/components/ui/RequestTerminal'
import { CompilerTerminal } from '@/components/ui/CompilerTerminal'
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram'
import { useLanguage } from '@/hooks/useLanguage'
import type { Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { locale, t } = useLanguage()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project) {
      dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [project])

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close()
    }
  }

  const details = project?.details

  return (
    // El cierre con Escape ya lo maneja el navegador de forma nativa en <dialog>;
    // este onClick solo agrega "click afuera para cerrar" (patrón estándar de MDN).
    // oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="bg-bg text-fg m-auto w-full max-w-2xl rounded-2xl p-0 backdrop:bg-black/60"
    >
      {details && project && (
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold text-balance">{project.title[locale]}</h3>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={t.projects.close}
              className="text-fg-muted hover:text-accent hover:bg-bg-subtle -m-2 shrink-0 rounded-md p-2 transition-colors"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <dl className="mt-6 space-y-6">
            <div>
              <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                {t.projects.problem}
              </dt>
              <dd className="text-fg-muted mt-1.5 text-sm leading-relaxed">
                {details.problem[locale]}
              </dd>
            </div>

            <div>
              <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                {t.projects.role}
              </dt>
              <dd className="text-fg-muted mt-1.5 text-sm leading-relaxed">
                {details.role[locale]}
              </dd>
            </div>

            <div>
              <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                {t.projects.architecture}
              </dt>
              <dd className="text-fg-muted mt-1.5 text-sm leading-relaxed">
                {details.architecture[locale]}
              </dd>
            </div>

            <div>
              <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                {t.projects.challenges}
              </dt>
              <dd className="mt-1.5">
                <ul className="space-y-2">
                  {details.challenges.map((challenge) => (
                    <li
                      key={challenge[locale]}
                      className="text-fg-muted text-sm leading-relaxed"
                    >
                      · {challenge[locale]}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div>
              <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                {t.projects.decisions}
              </dt>
              <dd className="mt-1.5">
                <ul className="space-y-2">
                  {details.decisions.map((decision) => (
                    <li key={decision[locale]} className="text-fg-muted text-sm leading-relaxed">
                      · {decision[locale]}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div>
              <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                {t.projects.learnings}
              </dt>
              <dd className="text-fg-muted mt-1.5 text-sm leading-relaxed">
                {details.learnings[locale]}
              </dd>
            </div>

            {details.apiDemo && (
              <div>
                <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                  {t.projects.demoTitle}
                </dt>
                <dd className="mt-2">
                  <RequestTerminal steps={details.apiDemo} runLabel={t.projects.runDemo} />
                </dd>
              </div>
            )}

            {details.compilerDemo && (
              <div>
                <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                  {t.projects.consoleDemoTitle}
                </dt>
                <dd className="mt-2">
                  <CompilerTerminal steps={details.compilerDemo} runLabel={t.projects.runDemo} />
                </dd>
              </div>
            )}

            {details.architectureDiagram && (
              <div>
                <dt className="text-accent text-xs font-semibold tracking-wide uppercase">
                  {t.projects.diagramTitle}
                </dt>
                <dd className="mt-2">
                  <ArchitectureDiagram
                    hub={details.architectureDiagram.hub}
                    connectorLabel={details.architectureDiagram.connectorLabel[locale]}
                    nodes={details.architectureDiagram.nodes.map((node) => ({
                      title: node.title,
                      caption: node.caption[locale],
                    }))}
                  />
                </dd>
              </div>
            )}
          </dl>
        </div>
      )}
    </dialog>
  )
}
