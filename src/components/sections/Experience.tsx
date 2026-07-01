import { useLanguage } from '@/hooks/useLanguage'
import { experience } from '@/data/experience'
import { Timeline } from '@/components/ui/Timeline'
import { FadeIn } from '@/components/ui/FadeIn'

export function Experience() {
  const { locale, t } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6">
      <FadeIn>
        <p className="text-accent text-sm font-semibold tracking-wider uppercase">
          {t.experience.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.experience.title}
        </h2>

        <div className="mt-10 max-w-2xl">
          <Timeline
            items={experience.map((entry) => ({
              id: entry.id,
              period: entry.period,
              title: entry.role[locale],
              subtitle: entry.organization,
              children: (
                <ul className="mt-3 space-y-1.5">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight[locale]} className="text-fg-muted text-sm">
                      · {highlight[locale]}
                    </li>
                  ))}
                </ul>
              ),
            }))}
          />
        </div>
      </FadeIn>
    </section>
  )
}
