import { Download, Mail } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { profile } from '@/data/profile'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { FadeIn } from '@/components/ui/FadeIn'

export function Contact() {
  const { t } = useLanguage()

  const channels = [
    { label: t.contact.emailLabel, value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    {
      label: t.contact.linkedinLabel,
      value: 'LinkedIn',
      href: profile.linkedinUrl,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      label: t.contact.githubLabel,
      value: 'GitHub',
      href: profile.githubUrl,
      Icon: GitHubIcon,
      external: true,
    },
    { label: t.contact.cvLabel, value: 'PDF', href: profile.cvUrl, Icon: Download, download: true },
  ]

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6">
      <FadeIn>
        <p className="text-accent text-sm font-semibold tracking-wider uppercase">
          {t.contact.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="text-fg-muted mt-4 max-w-xl leading-relaxed">{t.contact.pitch}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon, external, download }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              download={download}
              className="border-border hover:border-accent group flex items-center gap-4 rounded-2xl border p-5 transition-colors"
            >
              <span className="bg-accent/10 text-accent flex size-11 shrink-0 items-center justify-center rounded-full">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium">{label}</p>
                <p className="text-fg-muted truncate text-sm">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
