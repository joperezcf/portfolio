import { motion } from 'framer-motion'
import { MapPin, Circle, Download, ArrowDown, Github, Linkedin } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import profileImg from '../../assets/perfil.jpg'

// Set to company name when employed, or null when available
const CURRENT_COMPANY: string | null = 'Payabli Inc.'

const techPills = ['React', 'TypeScript', '.NET', 'PostgreSQL', 'Docker']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(to right, #06B6D4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Gradient blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-surface px-3 py-1 rounded-full">
                <MapPin size={13} />
                {t.hero.location}
              </span>
              {!CURRENT_COMPANY && (
                <span className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                  <Circle size={8} className="fill-emerald-500" />
                  {t.hero.available}
                </span>
              )}
            </motion.div>

            <motion.p variants={item} className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-2">
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-none"
            >
              <span className="text-slate-900 dark:text-white">Jose </span>
              <span className="text-accent">Orlando</span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8"
            >
              {t.hero.description}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
              >
                {t.hero.viewWork}
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/5 transition-colors"
              >
                <Download size={16} />
                {t.hero.downloadCV}
              </button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com/joperezcf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/joperezcf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-2">
              {techPills.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="order-1 lg:order-2 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl blur-2xl" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden ring-4 ring-accent/30 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Jose Orlando"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              {CURRENT_COMPANY && (
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-surface rounded-xl px-3 py-2 shadow-lg border border-light-border dark:border-dark-border"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Currently at</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{CURRENT_COMPANY}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="no-print absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-accent transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  )
}
