import type { LocalizedText } from '@/types/content'

export interface ExperienceEntry {
  id: string
  organization: string
  period: string
  role: LocalizedText
  highlights: LocalizedText[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'sec-socorrismo',
    organization: 'SEC Socorrismo',
    period: '2019 — 2025',
    role: { es: 'Voluntario de Socorrismo', en: 'First-Aid Volunteer' },
    highlights: [
      {
        es: 'Primeros auxilios en eventos masivos.',
        en: 'First aid response at large-scale events.',
      },
      {
        es: 'Coordinación de equipos en situaciones de emergencia.',
        en: 'Team coordination during emergency situations.',
      },
      {
        es: 'Capacitación de nuevos voluntarios en primeros auxilios básicos.',
        en: 'Training new volunteers in basic first aid.',
      },
      {
        es: 'Toma de decisiones bajo presión y resolución de situaciones críticas.',
        en: 'Decision-making under pressure and critical situation resolution.',
      },
    ],
  },
]
