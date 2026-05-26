import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Download } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'
import { cn } from '../../lib/utils'

const sectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, t, toggleLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = sectionIds.map(id => ({
    id,
    label: t.nav[id as keyof typeof t.nav] as string,
  }))

  return (
    <header
      className={cn(
        'no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 font-bold text-lg"
        >
          <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center text-sm font-bold">
            JO
          </span>
          <span className="hidden sm:block text-slate-800 dark:text-slate-200">Jose Orlando</span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                  activeSection === id
                    ? 'text-accent bg-accent/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-accent hover:bg-accent/5'
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="hidden sm:flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border border-light-border dark:border-dark-border text-slate-600 dark:text-slate-400 hover:border-accent hover:text-accent transition-colors"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-accent hover:bg-accent/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Download CV */}
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            <Download size={14} />
            {t.nav.downloadCV}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-400"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white dark:bg-dark-surface border-b border-light-border dark:border-dark-border"
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={cn(
                      'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      activeSection === id
                        ? 'text-accent bg-accent/10'
                        : 'text-slate-700 dark:text-slate-300 hover:text-accent hover:bg-accent/5'
                    )}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-2 flex gap-2">
                <button
                  onClick={toggleLang}
                  className="flex-1 text-center px-2 py-2 rounded-md text-sm font-semibold border border-light-border dark:border-dark-border text-slate-600 dark:text-slate-400"
                >
                  {lang === 'en' ? 'Español' : 'English'}
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium bg-accent text-white"
                >
                  <Download size={14} />
                  CV
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
