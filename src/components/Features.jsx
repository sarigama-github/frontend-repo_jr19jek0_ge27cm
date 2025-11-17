import { motion } from 'framer-motion'
import { Sparkles, Wand2, FileText, Gauge } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Cleaner, friendlier copy',
    desc: 'Remove fluff and jargon. Keep the meaning. Sound like a human — not a bot.'
  },
  {
    icon: Wand2,
    title: 'Tone controls',
    desc: 'Choose warm, expert, playful, or concise. Your voice, consistently applied.'
  },
  {
    icon: FileText,
    title: 'Structured outputs',
    desc: 'Headlines, sections, FAQs, CTAs — ready-made blocks for the web.'
  },
  {
    icon: Gauge,
    title: 'Fast by default',
    desc: 'Lightning responses with smart retries and zero-config caching.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-[#0b0b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Write less. Say more.
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-white/80 hover:border-white/20 hover:from-white/[0.1]"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-fuchsia-300">
                <item.icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
