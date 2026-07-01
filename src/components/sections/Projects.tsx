import { Binary, Cpu, ExternalLink, Users, UtensilsCrossed } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/hooks/useLanguage'
import { projects, type ProjectIcon } from '@/data/projects'

const PROJECT_ICONS: Record<ProjectIcon, typeof Cpu> = {
  restaurant: UtensilsCrossed,
  os: Cpu,
  simulation: Users,
  automata: Binary,
}

export function Projects() {
  const { locale, t } = useLanguage()

  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6">
      <FadeIn>
        <p className="text-accent text-sm font-semibold tracking-wider uppercase">
          {t.projects.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.projects.title}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = PROJECT_ICONS[project.icon]
            return (
              <FadeIn
                key={project.id}
                delay={(index % 2) * 100}
                className="border-border flex flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-md"
              >
                <div className="bg-accent/10 flex h-32 items-center justify-center">
                  <Icon className="text-accent size-10" aria-hidden />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold">{project.title[locale]}</h3>
                  <p className="text-fg-muted mt-2 flex-1 text-sm leading-relaxed">
                    {project.description[locale]}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="bg-bg-subtle text-fg-muted rounded-full px-3 py-1 text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.repoUrl && (
                    <Button
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="mt-5 self-start"
                    >
                      {t.projects.viewCode}
                      <ExternalLink className="size-4" aria-hidden />
                    </Button>
                  )}
                </div>
              </FadeIn>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
