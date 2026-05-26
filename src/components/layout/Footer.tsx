import { Github } from 'lucide-react'
import { useLang } from '../../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="no-print border-t border-light-border dark:border-dark-border py-8 px-4">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>
          {t.footer.built} · {t.footer.rights} © {new Date().getFullYear()}
        </p>
        <a
          href="https://github.com/joperezcf/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <Github size={14} />
          {t.footer.sourceCode}
        </a>
      </div>
    </footer>
  )
}
