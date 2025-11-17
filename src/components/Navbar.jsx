import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <span className="text-white font-semibold tracking-tight">TextGPT</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#usecases" className="hover:text-white transition-colors">Use cases</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors">Try demo</a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white/80">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
