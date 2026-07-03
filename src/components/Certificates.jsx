import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certificates = [
  {
    title: 'AI for Business',
    subtitle: 'Innovate, Automate, Dominate',
    date: '2025',
    category: 'Artificial Intelligence',
    url: '/certificates/E-Certificate%20MUH%20FAIZ%20AI%20for%20Business_%20Innovate,%20Automate,%20Dominate.pdf',
  },
  {
    title: 'Pembekalan PI',
    subtitle: 'Praktik Industri',
    date: '2025',
    category: 'Industrial Practice',
    url: '/certificates/E-Certificate%20Pembekalan%20PI.pdf',
  },
  {
    title: 'Menti',
    subtitle: 'Menti',
    date: '2026',
    category: 'Sosialisasi',
    url: '/certificates/SERTI MENTI.pdf',
  },
  {
    title: 'Excel',
    subtitle: 'Ms Excel',
    date: '2026',
    category: 'Data Analyst',
    url: '/certificates/MUH FAIZ - Sertifikat Excel Batch 8.pdf',
  },
  {
    title: 'Dicoding',
    subtitle: 'Pemrograman Dasar Java',
    date: '2026',
    category: 'Pemrograman',
    url: '/certificates/Sertifikat pemrograman dasar java.pdf',
  },
  {
    title: 'Dicoding',
    subtitle: 'Manajemen Dasar',
    date: '2026',
    category: 'Manajemen',
    url: '/certificates/DicodingSertifikateManajemen dasar.pdf',
  },
]

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col justify-between rounded-xl border border-white/10 bg-dark-800/55 p-5 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-neon-amber/35 hover:-translate-y-1"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-amber/10 text-neon-amber">
            <FiAward size={18} />
          </div>
          <FiExternalLink
            size={15}
            className="text-white/25 transition-colors duration-300 group-hover:text-neon-amber"
          />
        </div>

        <span className="mt-4 block font-body text-[11px] font-medium uppercase tracking-wide text-neon-amber/80">
          {cert.category}
        </span>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-white">
          {cert.title}
        </h3>
        <p className="mt-1 font-body text-sm text-white/50">{cert.subtitle}</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 font-body text-xs text-white/40">
        <span>E-Certificate</span>
        <span>{cert.date}</span>
      </div>
    </motion.a>
  )
}

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certificates" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-10 max-w-3xl">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <CertCard key={cert.title + i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}