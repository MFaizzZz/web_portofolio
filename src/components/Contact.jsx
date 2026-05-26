import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'mhmdfaiz188@gmail.com',
    href: 'mailto:mhmdfaiz188@gmail.com',
    color: '#F59E0B',
    desc: 'Best for professional inquiries',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+62 815-2447-2859',
    href: 'https://wa.me/6281524472859',
    color: '#25D366',
    desc: 'Quick messages & collaboration',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/MFaizzZz',
    href: 'https://github.com/MFaizzZz',
    color: '#ffffff',
    desc: 'Check out my code & projects',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-faiz-b2735237b',
    href: 'https://www.linkedin.com/in/muhammad-faiz-b2735237b/',
    color: '#0A66C2',
    desc: 'Professional network & opportunities',
  },
]

function ContactCard({ method, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const Icon = method.icon

  return (
    <motion.a
      ref={ref}
      href={method.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-5 border-t border-white/10 py-5 transition-colors duration-300 hover:border-neon-amber/40"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 6, transition: { duration: 0.2 } }}
    >
      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center transition-all duration-300 group-hover:scale-110"
      >
        <Icon style={{ color: method.color }} size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body text-white/40 text-xs mb-0.5">{method.label}</p>
        <p className="font-display font-semibold text-white text-sm mb-1 group-hover:text-neon-amber transition-colors duration-200 truncate">
          {method.value}
        </p>
        <p className="font-body text-white/30 text-xs">{method.desc}</p>
      </div>
      <FiSend
        className="text-white/20 group-hover:text-neon-amber transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
        size={16}
      />
    </motion.a>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative flex min-h-screen items-center py-24">
      <div className="absolute bottom-0 left-1/2 h-[220px] w-[600px] -translate-x-1/2 bg-neon-amber/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">

          {/* Left — heading */}
          <div className="lg:w-96 flex-shrink-0" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="mb-3"
            >
              <span className="tag-pill">Get In Touch</span>
            </motion.div>
            <motion.h2
              className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Let's{' '}
              <span className="text-neon-amber">Work</span>{' '}
              Together
            </motion.h2>
            <motion.p
              className="font-body text-white/55 leading-relaxed md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Saya terbuka untuk peluang freelance, kolaborasi project, atau diskusi seputar
              teknologi dan data. Jangan ragu untuk menghubungi saya melalui channel di bawah.
            </motion.p>

            {/* Availability indicator */}
            <motion.div
              className="mt-8 flex items-center gap-3 border-t border-green-500/25 pt-5"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <div>
                <p className="font-body font-semibold text-green-400 text-sm">Available for Work</p>
                <p className="font-mono text-white/30 text-xs">Response within 24 hours</p>
              </div>
            </motion.div>
          </div>

          {/* Right — contact cards */}
          <div className="w-full flex-1 space-y-4">
            {contactMethods.map((method, i) => (
              <ContactCard key={method.label} method={method} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
