import { GraduationCap, Languages } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/hooks/useLanguage'
import profilePhoto from '@/assets/profile-photo.webp'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6">
      <FadeIn>
        <p className="text-accent text-sm font-semibold tracking-wider uppercase">
          {t.about.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.about.title}
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
          <div className="relative mx-auto w-48 md:mx-0 md:w-full">
            <div aria-hidden className="border-accent absolute -inset-3 rounded-2xl border-2" />
            <img
              src={profilePhoto}
              alt={t.about.photoAlt}
              width={400}
              height={400}
              loading="lazy"
              className="relative aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-fg-muted leading-relaxed">{t.about.paragraph1}</p>
            <p className="text-fg-muted mt-4 leading-relaxed">{t.about.paragraph2}</p>

            <div className="border-border mt-8 grid gap-6 border-t pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-accent mt-0.5 size-5 shrink-0" aria-hidden />
                <dl>
                  <dt className="text-sm font-medium">{t.about.educationLabel}</dt>
                  <dd className="text-fg-muted mt-0.5 text-sm">{t.about.educationValue}</dd>
                </dl>
              </div>
              <div className="flex items-start gap-3">
                <Languages className="text-accent mt-0.5 size-5 shrink-0" aria-hidden />
                <dl>
                  <dt className="text-sm font-medium">{t.about.languagesLabel}</dt>
                  <dd className="text-fg-muted mt-0.5 text-sm">{t.about.languagesValue}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
