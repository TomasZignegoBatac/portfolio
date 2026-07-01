import { useEffect, useState, type ReactNode } from 'react'
import { dictionary } from '@/i18n/dictionary'
import type { Locale } from '@/types/content'
import { LanguageContext } from './language-context'

const STORAGE_KEY = 'locale'

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = dictionary[locale].meta.title
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const toggleLocale = () => setLocale((current) => (current === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ locale, t: dictionary[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}
