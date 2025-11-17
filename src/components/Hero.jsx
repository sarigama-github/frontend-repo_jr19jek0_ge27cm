import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0b10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b10]/30 via-[#0b0b10]/60 to-[#0b0b10] pointer-events-none" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center text-xs font-medium tracking-wider uppercase text-fuchsia-300/90 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur">
              AI text engine for the web
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-white via-white to-fuchsia-200 bg-clip-text text-transparent">
              Turn your ideas into clean, human text — instantly
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
              Paste anything. Get a clearer, friendlier, human version back. Designed for landing pages, product docs, help centers, and teams who value clarity over jargon.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition-opacity">
                Try it free
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition-colors">
                See how it works
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
