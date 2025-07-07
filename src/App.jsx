import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/project/Projects'
import Education from './components/Education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
