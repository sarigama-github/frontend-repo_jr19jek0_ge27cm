import { motion } from 'framer-motion'

const steps = [
  {
    k: '1',
    title: 'Paste your text',
    desc: 'Drop in raw notes, docs, or website copy. No cleanup needed.'
  },
  {
    k: '2',
    title: 'Pick a tone',
    desc: 'Friendly, expert, concise, playful — whatever fits your brand.'
  },
  {
    k: '3',
    title: 'Get a cleaner version',
    desc: 'We rewrite it to be clear, human, and ready to publish.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 bg-[#0b0b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          From messy to meaningful — in seconds
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white/80"
            >
              <div className="text-fuchsia-300 text-sm font-mono">Step {s.k}</div>
              <h3 className="mt-2 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
