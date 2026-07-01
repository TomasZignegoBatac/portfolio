import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { useLanguage } from '@/hooks/useLanguage'
import { profile } from '@/data/profile'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="from-fg/25 via-fg/10 pointer-events-none absolute inset-x-0 top-0 -z-10 h-[65vh] bg-gradient-to-b to-transparent"
      />

      <div className="mx-auto flex min-h-[85svh] max-w-5xl flex-col justify-center px-4 py-24 sm:px-6">
        <FadeIn>
          <p className="text-accent mb-4 flex items-center gap-1.5 text-sm font-medium">
            <MapPin className="size-4" aria-hidden />
            {profile.location}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>

          <p className="text-fg-muted mt-4 text-lg sm:text-xl">{t.hero.role}</p>

          <p className="text-fg-muted mt-6 max-w-2xl text-base leading-relaxed">{t.hero.pitch}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              {t.hero.ctaProjects}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href={profile.cvUrl} download variant="secondary">
              {t.hero.ctaCv}
              <Download className="size-4" aria-hidden />
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-1">
            <Button
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-5" aria-hidden />
            </Button>
            <Button
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-5" aria-hidden />
            </Button>
            <Button href={`mailto:${profile.email}`} variant="ghost" aria-label="Email">
              <Mail className="size-5" aria-hidden />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
