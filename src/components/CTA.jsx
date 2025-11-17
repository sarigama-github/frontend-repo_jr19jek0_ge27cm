import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 bg-[#0b0b10]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text">
            Make your words work harder
          </h3>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Start with the free demo. No signup required. Upgrade when you need collaboration, version history, and brand voice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition-opacity">
              Use the demo
            </a>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition-colors">
              Talk to us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
