import type { ReactNode } from 'react'

export interface TimelineEntry {
  id: string
  period: string
  title: string
  subtitle: string
  children?: ReactNode
}

/** Lista de hitos con línea de tiempo vertical, usada por Experiencia y Educación. */
export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="relative">
      <div aria-hidden className="bg-border absolute top-2 bottom-2 left-[7px] w-px" />
      <ol className="space-y-10">
        {items.map((item) => (
          <li key={item.id} className="relative pl-8">
            <span
              aria-hidden
              className="border-accent bg-bg absolute top-1.5 left-0 size-3.5 rounded-full border-2"
            />
            <p className="text-fg-muted text-xs font-medium tracking-wide uppercase">
              {item.period}
            </p>
            <h3 className="mt-1 font-medium">{item.title}</h3>
            <p className="text-fg-muted text-sm">{item.subtitle}</p>
            {item.children}
          </li>
        ))}
      </ol>
    </div>
  )
}
