import { createContext } from 'react'
import type { Dictionary } from '@/i18n/dictionary'
import type { Locale } from '@/types/content'

export interface LanguageContextValue {
  locale: Locale
  t: Dictionary
  toggleLocale: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
