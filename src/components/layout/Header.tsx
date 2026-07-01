import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'
import { profile } from '@/data/profile'

const NAV_ITEMS = [
  { id: 'about', key: 'about' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'experience', key: 'experience' },
  { id: 'education', key: 'education' },
  { id: 'contact', key: 'contact' },
] as const

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { locale, t, toggleLocale } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-border bg-bg/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>

        <nav aria-label="Principal" className="hidden md:flex md:items-center md:gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-fg-muted hover:text-accent text-sm font-medium transition-colors"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLocale}
            className="text-fg-muted hover:text-accent hover:bg-bg-subtle rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors"
            aria-label={t.language.switchTo}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="text-fg-muted hover:text-accent hover:bg-bg-subtle rounded-md p-2 transition-colors"
            aria-label={theme === 'dark' ? t.theme.toggleToLight : t.theme.toggleToDark}
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-fg-muted hover:text-accent hover:bg-bg-subtle rounded-md p-2 transition-colors md:hidden"
            aria-label={menuOpen ? t.menu.close : t.menu.open}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Principal"
          className="border-border flex flex-col gap-1 border-t px-4 py-3 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-fg-muted hover:text-accent hover:bg-bg-subtle rounded-md px-2 py-2 text-sm font-medium transition-colors"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
