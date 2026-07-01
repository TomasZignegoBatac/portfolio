export type SkillCategoryId = 'languages' | 'backend' | 'tools'

export interface SkillCategory {
  id: SkillCategoryId
  items: string[]
}

/** Nombres de tecnologías: son nombres propios, no se traducen entre ES/EN. */
export const skillCategories: SkillCategory[] = [
  { id: 'languages', items: ['Java', 'JavaScript', 'Go', 'C', 'Haskell', 'Prolog', 'Wollok'] },
  { id: 'backend', items: ['Node.js', 'MongoDB'] },
  { id: 'tools', items: ['Git', 'GitHub', 'Linux', 'Visual Studio Code', 'IntelliJ IDEA'] },
]
