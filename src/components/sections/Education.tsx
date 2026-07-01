import { Award } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { education, certifications } from '@/data/education'
import { Timeline } from '@/components/ui/Timeline'
import { FadeIn } from '@/components/ui/FadeIn'

export function Education() {
  const { locale, t } = useLanguage()

  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6">
      <FadeIn>
        <p className="text-accent text-sm font-semibold tracking-wider uppercase">
          {t.education.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.education.title}
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_260px]">
          <Timeline
            items={education.map((entry) => ({
              id: entry.id,
              period: `${entry.startYear} — ${entry.endYear ?? t.education.present}`,
              title: entry.degree[locale],
              subtitle: entry.institution,
            }))}
          />

          <div>
            <h3 className="text-fg-muted text-xs font-medium tracking-wide uppercase">
              {t.education.certificationsTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.id} className="flex items-start gap-3">
                  <Award className="text-accent mt-0.5 size-4 shrink-0" aria-hidden />
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-fg-muted text-xs">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
