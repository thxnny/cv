import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Resume />
      <Contact />
      <BackToTop />
    </main>
  )
}
