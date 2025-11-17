import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b10] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-white/50 text-sm">
        <p>Built with care. Clear words win.</p>
      </footer>
    </div>
  )
}

export default App
