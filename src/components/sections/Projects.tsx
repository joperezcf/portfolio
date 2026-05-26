import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useLang } from '../../context/LangContext'

interface Project {
  titleEn: string
  titleEs: string
  descEn: string
  descEs: string
  stack: string[]
  github: string
  live?: string
}

const projects: Project[] = [
  {
    titleEn: 'Personal Portfolio',
    titleEs: 'Portfolio Personal',
    descEn: "The site you're on right now. Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. Features bilingual support (EN/ES), dark/light mode, and smooth animations.",
    descEs: 'El sitio que estás viendo ahora. Construido con Vite, React, TypeScript, Tailwind CSS y shadcn/ui. Soporte bilingüe (EN/ES), modo oscuro/claro y animaciones suaves.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/joperezcf/portfolio',
    live: 'https://joperezcf.github.io/portfolio/',
  },
  {
    titleEn: 'qEstudiare',
    titleEs: 'qEstudiare',
    descEn: 'Android app to help Cuban students explore university careers, navigate academic offerings, and make informed decisions about their studies.',
    descEs: 'Aplicación Android para ayudar a estudiantes cubanos a explorar carreras universitarias, navegar la oferta académica y tomar decisiones informadas sobre sus estudios.',
    stack: ['Java', 'Android SDK'],
    github: 'https://github.com/joperezcf/qestudiare',
  },
  {
    titleEn: 'm-SMS',
    titleEs: 'm-SMS',
    descEn: 'Desktop application for sending bulk SMS messages through the Moises Soft platform. Built to simplify mass communication workflows.',
    descEs: 'Aplicación de escritorio para envío masivo de mensajes SMS a través de la plataforma Moises Soft. Construida para simplificar flujos de comunicación masiva.',
    stack: ['Java'],
    github: 'https://github.com/joperezcf/m-SMS',
  },
]

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
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{t.projects.title}</p>
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
