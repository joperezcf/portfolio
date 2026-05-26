import { createContext, useContext, useState, type ReactNode } from 'react'
import { en } from '../i18n/en'
import { es } from '../i18n/es'
import type { Translations } from '../i18n/en'

type Lang = 'en' | 'es'

interface LangContextType {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    return saved ?? (navigator.language.startsWith('es') ? 'es' : 'en')
  })

  const toggleLang = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'es' : 'en'
      localStorage.setItem('lang', next)
      return next
    })
  }

  return (
    <LangContext.Provider value={{ lang, t: lang === 'en' ? en : es, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
