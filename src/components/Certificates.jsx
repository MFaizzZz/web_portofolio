import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'

const certificates = [
  {
    title: 'AI for Business',
    subtitle: 'Innovate, Automate, Dominate',
    issuer: 'E-Certificate',
    date: '2025',
    category: 'Artificial Intelligence',
    url: '/certificates/E-Certificate%20MUH%20FAIZ%20AI%20for%20Business_%20Innovate,%20Automate,%20Dominate.pdf',
  },
  {
    title: 'Pembekalan PI',
    subtitle: 'Praktik Industri',
    issuer: 'E-Certificate',
    date: '2025',
    category: 'Industrial Practice',
    url: '/certificates/E-Certificate%20Pembekalan%20PI.pdf',
  },
  {
    title: 'Menti',
    subtitle: 'Menti',
    issuer: 'E-Certificate',
    date: '2026',
    category: 'Sosialisai',
    url: '/certificates/SERTI MENTI.pdf',
  },
]

function CertRow({ cert, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      className="group rounded-2xl border border-white/10 bg-dark-800/55 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-neon-amber/35 md:p-8"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-neon-amber/10 text-neon-amber">
            <FiAward size={24} />
          </div>

          <div>
            <span className="font-body text-xs font-medium uppercase text-neon-amber/80">
              {cert.category}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
              {cert.title}
            </h3>
            <p className="mt-2 font-body text-base text-white/55">{cert.subtitle}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3 font-body text-sm text-white/45">
              <span>{cert.issuer}</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar size={14} />
                {cert.date}
              </span>
            </div>
          </div>
        </div>

        <motion.a
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neon-amber/30 px-5 py-3 font-body text-sm font-semibold text-neon-amber transition-colors duration-300 hover:bg-neon-amber hover:text-dark-900 md:w-auto"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          View Certificate
          <FiExternalLink size={15} />
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certificates" className="relative flex min-h-[80vh] items-center py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="tag-pill">Certificates</span>
          </motion.div>
          <motion.h2
            className="mt-4 font-display text-4xl font-extrabold text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Verified learning credentials
          </motion.h2>
          <motion.p
            className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/55 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
          >
            Sertifikat pilihan yang mendukung fokus saya pada teknologi, data,
            dan pengembangan solusi digital.
          </motion.p>
        </div>

        <div className="max-w-5xl space-y-4">
          {certificates.map((cert, i) => (
            <CertRow key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
