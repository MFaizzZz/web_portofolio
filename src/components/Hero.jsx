import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-scroll'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const roles = ['Data Analyst', 'Web Developer', 'Flutter Developer']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          <motion.div
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-5"
            >
              Muh Faiz
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-7 flex flex-wrap gap-x-4 gap-y-2">
              {roles.map((role, index) => (
                <span key={role} className="font-body text-sm text-neon-blue/85">
                  {role}{index < roles.length - 1 ? ' /' : ''}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-body text-white/65 text-lg leading-relaxed mb-9"
            >
              Mahasiswa Universitas Negeri Makassar yang fokus pada analisis data,
              pengembangan web, dan aplikasi mobile. Saya membangun solusi digital
              yang rapi, responsif, dan berbasis data.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 border-b border-neon-blue pb-2 font-body text-sm font-semibold text-neon-blue transition-colors duration-300 hover:text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload size={16} />
                Download CV
              </motion.a>
              <Link to="contact" smooth duration={600}>
                <motion.button
                  className="flex items-center gap-2 border-b border-white/25 pb-2 font-body text-sm font-medium text-white/75 transition-colors duration-300 hover:border-neon-blue hover:text-neon-blue"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMail size={16} />
                  Contact
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {[
                { icon: FiGithub, href: 'https://github.com/MFaizzZz', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-faiz-b2735237b/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center text-white/55 transition-colors duration-200 hover:text-neon-blue"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/Faiz.jpeg"
                alt="Foto Muh Faiz"
                className="aspect-[4/5] w-full object-cover object-center opacity-95"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
