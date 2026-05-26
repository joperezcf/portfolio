import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../../context/LangContext'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

export default function About() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: t.about.stats.years, label: t.about.stats.yearsLabel },
    { value: t.about.stats.tech, label: t.about.stats.techLabel },
    { value: t.about.stats.roles, label: t.about.stats.rolesLabel },
  ]

  return (
    <section id="about" className="section-padding border-t border-light-border dark:border-dark-border">
      <motion.div
        ref={ref}
        className="container-max"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            {t.about.title}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={stagger} className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            <motion.p variants={fadeUp}>{t.about.p1}</motion.p>
            <motion.p variants={fadeUp}>{t.about.p2}</motion.p>
            <motion.p variants={fadeUp}>{t.about.p3}</motion.p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="text-center p-6 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm"
              >
                <p className="text-3xl font-extrabold text-accent mb-1">{value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
