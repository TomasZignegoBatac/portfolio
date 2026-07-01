import { Code2, Database, Terminal } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/hooks/useLanguage'
import { skillCategories, type SkillCategoryId } from '@/data/skills'

const CATEGORY_ICONS: Record<SkillCategoryId, typeof Code2> = {
  languages: Code2,
  backend: Database,
  tools: Terminal,
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-24 sm:px-6">
      <FadeIn>
        <p className="text-accent text-sm font-semibold tracking-wider uppercase">
          {t.skills.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.skills.title}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id]
            return (
              <FadeIn
                key={category.id}
                delay={index * 100}
                className="border-border rounded-2xl border p-6"
              >
                <div className="flex items-center gap-2">
                  <Icon className="text-accent size-5" aria-hidden />
                  <h3 className="font-medium">{t.skills.categories[category.id]}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="bg-bg-subtle text-fg-muted rounded-full px-3 py-1 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
