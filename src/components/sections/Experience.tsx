import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { useLang } from '../../context/LangContext'

interface Role {
  company: string
  url: string
  role: string
  startDate: string
  endDate?: string
  location: string
  description: string
  bullets: string[]
  current?: boolean
}

const roles: Role[] = [
  {
    company: 'Payabli Inc.',
    url: 'https://www.payabli.com/',
    role: 'Software Engineer',
    startDate: 'May 2022',
    location: 'Miami, FL (Remote)',
    description: 'Fintech company building embedded payment infrastructure for software platforms.',
    bullets: [
      'Build React/TypeScript payment widgets and embedded components integrated into third-party platforms',
      'Develop merchant dashboards and financial reporting interfaces handling complex data visualization',
      'Contribute to full-stack features across the React frontend and .NET/C# backend with PostgreSQL',
      'Maintain and extend component library documented with Storybook',
      'Collaborate with design (Figma) and backend teams in an agile environment',
    ],
    current: true,
  },
  {
    company: 'CIMEX Audita S.A.',
    url: 'https://audita.cimex.com.cu/',
    role: 'Software Developer',
    startDate: 'Jan 2019',
    endDate: 'Sep 2021',
    location: 'Cienfuegos, Cuba',
    description: 'IT auditing company under CIMEX Corporation.',
    bullets: [
      'Developed and maintained internal software tools for audit management',
      'Built web applications supporting business operations and internal workflows',
    ],
  },
  {
    company: 'Ministry of Communications',
    url: 'https://www.mincom.gob.cu/',
    role: 'IT Specialist',
    startDate: 'Sep 2017',
    endDate: 'Apr 2019',
    location: 'Cienfuegos, Cuba',
    description: 'Territorial Control Office.',
    bullets: [
      'Provided software support and IT security for government communications infrastructure',
      'Managed informatic security protocols and system maintenance',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Experience() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding border-t border-light-border dark:border-dark-border">
      <div ref={ref} className="container-max">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{t.experience.title}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{t.experience.title}</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400">{t.experience.subtitle}</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-light-border dark:bg-dark-border" />

            <div className="space-y-10">
              {roles.map((role, i) => (
                <motion.div key={i} variants={fadeUp} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    role.current
                      ? 'border-accent bg-accent/10'
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-dark-bg'
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${role.current ? 'bg-accent' : 'bg-slate-400 dark:bg-slate-500'}`} />
                  </div>

                  <div className="p-5 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{role.role}</h3>
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent font-semibold hover:underline text-sm"
                        >
                          {role.company}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                      <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                        <p className="font-medium">
                          {role.startDate} –{' '}
                          {role.current ? (
                            <span className="text-emerald-500 font-semibold">{t.experience.present}</span>
                          ) : (
                            role.endDate
                          )}
                        </p>
                        <p className="flex items-center gap-1 justify-end">
                          <MapPin size={11} /> {role.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 italic">{role.description}</p>
                    <ul className="space-y-1.5">
                      {role.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
