import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Education from '@/components/education'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

