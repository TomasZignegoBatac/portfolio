import { Mail } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { profile } from '@/data/profile'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-fg-muted text-sm">
          © {year} {profile.name}. {t.footer.rights}
        </p>

        <div className="flex items-center gap-1">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fg-muted hover:text-accent hover:bg-bg-subtle rounded-md p-2 transition-colors"
          >
            <GitHubIcon className="size-5" aria-hidden />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fg-muted hover:text-accent hover:bg-bg-subtle rounded-md p-2 transition-colors"
          >
            <LinkedInIcon className="size-5" aria-hidden />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-fg-muted hover:text-accent hover:bg-bg-subtle rounded-md p-2 transition-colors"
          >
            <Mail className="size-5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
