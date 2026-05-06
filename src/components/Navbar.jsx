import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-dark-900/45 backdrop-blur-xl border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth duration={600} className="cursor-pointer">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Muh<span className="text-neon-blue">.</span>Faiz
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              spy
              onSetActive={() => setActive(link.to)}
              className="relative px-4 py-2 cursor-pointer group"
            >
              <span className={`font-body text-sm font-medium transition-colors duration-200 ${
                active === link.to ? 'text-neon-blue' : 'text-white/60 group-hover:text-white'
              }`}>
                {link.label}
              </span>
              {active === link.to && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-blue shadow-neon-sm"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/cv.pdf"
            download
            className="text-sm font-medium font-body text-neon-blue transition-colors duration-200 hover:text-white"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-neon-blue transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-dark-800/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-white/70 hover:text-neon-blue font-body font-medium transition-colors cursor-pointer border-b border-white/5 last:border-0"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
