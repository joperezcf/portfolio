import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </LangProvider>
    </ThemeProvider>
  )
}
