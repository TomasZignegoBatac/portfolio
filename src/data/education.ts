import type { LocalizedText } from '@/types/content'

export interface EducationEntry {
  id: string
  institution: string
  startYear: string
  endYear: string | null
  degree: LocalizedText
}

export const education: EducationEntry[] = [
  {
    id: 'utn-frba',
    institution: 'UTN - FRBA',
    startYear: '2019',
    endYear: null,
    degree: {
      es: 'Ingeniería en Sistemas de la Información',
      en: 'Information Systems Engineering',
    },
  },
  {
    id: 'colegio-guadalupe',
    institution: 'Colegio Guadalupe',
    startYear: '2014',
    endYear: '2018',
    degree: {
      es: 'Bachiller en Ciencias Naturales',
      en: 'Natural Sciences Baccalaureate',
    },
  },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
}

export const certifications: Certification[] = [
  { id: 'node-backend', name: 'NodeJS Backend', issuer: 'EducaciónIT', year: '2024' },
  { id: 'mongodb-inicial', name: 'MongoDB Inicial', issuer: 'EducaciónIT', year: '2023' },
]
