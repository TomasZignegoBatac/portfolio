interface ArchitectureDiagramProps {
  hub: { title: string; parts: string[] }
  nodes: { title: string; caption: string }[]
  connectorLabel: string
}

/** Diagrama simple: un módulo central ("hub") conectado a varios módulos satélite. */
export function ArchitectureDiagram({ hub, nodes, connectorLabel }: ArchitectureDiagramProps) {
  return (
    <div className="border-border rounded-xl border p-5">
      <div className="border-accent bg-accent/5 rounded-lg border-2 p-4 text-center">
        <p className="font-semibold">{hub.title}</p>
        <div className="text-fg-muted mt-1.5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          {hub.parts.map((part) => (
            <span key={part}>{part}</span>
          ))}
        </div>
      </div>

      <div className="text-fg-muted my-4 flex items-center justify-center gap-3 text-xs">
        <span className="bg-border h-px flex-1" />
        <span className="shrink-0">{connectorLabel}</span>
        <span className="bg-border h-px flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {nodes.map((node) => (
          <div key={node.title} className="border-border rounded-lg border p-3 text-center">
            <p className="text-sm font-medium">{node.title}</p>
            <p className="text-fg-muted mt-1 text-xs leading-snug">{node.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
