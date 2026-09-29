import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { projects } from '../../data/profile'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const { t, lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-dark-surface/50 border-t border-light-border dark:border-dark-border">
      <div ref={ref} className="container-max">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className="font-mono text-accent text-sm mb-2">04 / {t.nav.projects.toLowerCase()}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{t.projects.title}</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400">{t.projects.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex flex-col p-6 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm hover:border-accent/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {lang === 'en' ? project.titleEn : project.titleEs}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {lang === 'en' ? project.descEn : project.descEs}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-3 border-t border-light-border dark:border-dark-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                    {t.projects.viewCode}
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                      {t.projects.liveDemo}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
