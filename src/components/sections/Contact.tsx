import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Send, type LucideIcon } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import type { Translations } from '../../i18n/en'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

interface SocialLink {
  icon: LucideIcon
  labelKey: keyof Translations['contact']
  href: string
  color: string
}

const links: SocialLink[] = [
  { icon: Mail, labelKey: 'email', href: 'mailto:emailplus360@gmail.com', color: 'hover:text-red-500' },
  { icon: Github, labelKey: 'github', href: 'https://github.com/joperezcf', color: 'hover:text-slate-900 dark:hover:text-white' },
  { icon: Linkedin, labelKey: 'linkedin', href: 'https://www.linkedin.com/in/joperezcf', color: 'hover:text-blue-600' },
  { icon: Send, labelKey: 'telegram', href: 'https://t.me/jopvcc', color: 'hover:text-sky-500' },
]

export default function Contact() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-dark-surface/50 border-t border-light-border dark:border-dark-border">
      <motion.div
        ref={ref}
        className="container-max text-center"
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div variants={fadeUp} className="mb-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{t.contact.title}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{t.contact.title}</h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 text-base leading-relaxed"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:emailplus360@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
          >
            <Mail size={16} />
            {t.contact.email}
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center gap-6">
          {links.map(({ icon: Icon, labelKey, href, color }) => (
            <a
              key={labelKey}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact[labelKey]}
              className={`p-3 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface text-slate-500 dark:text-slate-400 ${color} transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5`}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
