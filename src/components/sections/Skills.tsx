import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { cn } from '../../lib/utils'

const skillGroups = [
  {
    key: 'frontend',
    skills: ['React 18', 'TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3', 'TanStack Query', 'Storybook'],
  },
  {
    key: 'styling',
    skills: ['Tailwind CSS', 'Material UI', 'CSS Modules', 'Sass'],
  },
  {
    key: 'backend',
    skills: ['ASP.NET Core', 'C#', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    key: 'testing',
    skills: ['Jest', 'React Testing Library'],
  },
  {
    key: 'tools',
    skills: ['Docker', 'Figma', 'Git', 'GitHub Actions', 'Vite', 'Webpack'],
  },
  {
    key: 'previous',
    skills: ['Java', 'PHP', 'Yii Framework', 'Android SDK', 'WordPress'],
  },
]

const accentColors: Record<string, string> = {
  frontend: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800',
  styling: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800',
  backend: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
  testing: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800',
  tools: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800',
  previous: 'bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-700',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-dark-surface/50 border-t border-light-border dark:border-dark-border">
      <div ref={ref} className="container-max">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{t.skills.title}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{t.skills.title}</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400">{t.skills.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map(({ key, skills }) => {
              const categoryKey = key as keyof typeof t.skills.categories
              return (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="p-5 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-4">
                    {t.skills.categories[categoryKey]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span
                        key={skill}
                        className={cn(
                          'px-2.5 py-1 text-xs font-medium rounded-full border',
                          accentColors[key]
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
