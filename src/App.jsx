import About from "./components/about"
import Hero from "./components/hero-section"
import Navbar from "./components/navbar"
import Skills from "./components/skills"

function App() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='py-4 mx-auto md:container'>
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </div>
  )
}

export default App
