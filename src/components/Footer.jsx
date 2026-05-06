import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const socials = [
  { icon: FiGithub, href: 'https://github.com/MFaizzZz', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-faiz-b2735237b/', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/6281524472859', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:mhmdfaiz188@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mx-auto flex w-fit items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center text-white/45 transition-colors duration-200 hover:text-neon-blue"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
