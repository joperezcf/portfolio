import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GraduationCap, Award } from 'lucide-react'
import { useLang } from '../../context/LangContext'

interface EducationEntry {
  institution: string
  location: string
  period: string
  degree: string
  url: string
  type: 'degree' | 'cert'
  verifyUrl?: string
}

const educationData: EducationEntry[] = [
  {
    institution: 'University of Computer Science (UCI)',
    location: 'Havana, Cuba',
    period: '2012 – 2017',
    degree: "Bachelor's — Computer Science Engineering",
    url: 'https://www.uci.cu/',
    type: 'degree',
  },
  {
    institution: 'National Autonomous University of Mexico (UNAM) via Coursera',
    location: 'Online',
    period: 'Jun 2016',
    degree: 'Certificate — Android Application Development',
    url: 'https://www.coursera.org/account/accomplishments/verify/ZWLHPH9Z927Z',
    type: 'cert',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/ZWLHPH9Z927Z',
  },
  {
    institution: 'University of Computer Science (UCI)',
    location: 'Havana, Cuba',
    period: 'Mar 2018',
    degree: 'Certificate — Introduction to the Semantic Web',
    url: 'https://www.uci.cu/',
    type: 'cert',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Education() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding border-t border-light-border dark:border-dark-border">
      <div ref={ref} className="container-max">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{t.education.title}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{t.education.title}</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400">{t.education.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-5 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                    edu.type === 'degree'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400'
                  }`}>
                    {edu.type === 'degree' ? <GraduationCap size={18} /> : <Award size={18} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{edu.period}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-1">
                  {edu.degree}
                </h3>
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline"
                >
                  {edu.institution}
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{edu.location}</p>
                {edu.verifyUrl && (
                  <a
                    href={edu.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-slate-500 dark:text-slate-400 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={11} />
                    {t.education.verify}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
