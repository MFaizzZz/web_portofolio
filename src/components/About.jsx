import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { FiBarChart2, FiCode, FiDatabase, FiSmartphone } from 'react-icons/fi'

const focusAreas = [
  {
    icon: FiBarChart2,
    title: 'Data Analysis',
    desc: 'Excel, SQL, Python, dan visualisasi data.',
  },
  {
    icon: FiCode,
    title: 'Web Development',
    desc: 'Website responsif dengan UI yang rapi.',
  },
  {
    icon: FiSmartphone,
    title: 'Flutter Development',
    desc: 'Aplikasi mobile cross-platform.',
  },
  {
    icon: FiDatabase,
    title: 'Database & SQL',
    desc: 'Query, relasi data, dan struktur database.',
  },
]

const stats = [
  { value: '4+', label: 'Projects' },
  { value: '1+', label: 'Certificates' },
  { value: '2+', label: 'Years Learning' },
]

function HangingPhoto() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-120, 120], [-8, 8])
  const springX = useSpring(x, { stiffness: 150, damping: 18 })
  const springY = useSpring(y, { stiffness: 150, damping: 18 })
  const springRotate = useSpring(rotate, { stiffness: 130, damping: 14 })

  function handleDragEnd() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative mx-auto -mt-2 mb-8 flex w-full max-w-xs flex-col items-center sm:mx-0 lg:-mt-6 lg:mb-0">
      <div className="flex flex-col items-center">
        <div className="h-1 w-32 rounded-full bg-white/15" />
        <div className="h-10 w-px bg-gradient-to-b from-white/35 to-white/10" />
      </div>

      <motion.div
        className="relative cursor-grab active:cursor-grabbing"
        style={{ x: springX, y: springY, rotate: springRotate }}
        drag
        dragConstraints={{ left: -90, right: 90, top: -30, bottom: 70 }}
        dragElastic={0.22}
        onDragEnd={handleDragEnd}
        whileDrag={{ scale: 1.03 }}
        whileHover={{ y: -2 }}
      >
        <div className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border border-neon-amber/25 bg-dark-900/80" />
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/Faiz.jpeg"
            alt="Foto Muh Faiz"
            className="aspect-[4/5] w-56 object-cover object-center sm:w-64"
            draggable="false"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  )
}

function FocusCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      className="border-t border-white/10 py-5 transition-colors duration-300 hover:border-neon-amber/40"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center text-neon-amber">
        <Icon size={18} />
      </div>
      <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-white/50">{item.desc}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="tag-pill">About</span>
            <h2 className="mt-4 max-w-sm font-display text-2xl font-bold leading-snug text-white md:text-3xl">
              Building digital products with data-minded thinking.
            </h2>
            <div className="mt-5 hidden lg:block">
              <HangingPhoto />
            </div>
          </motion.div>

          <div>
            <div className="lg:hidden">
              <HangingPhoto />
            </div>

            <motion.p
              className="max-w-3xl font-body text-base leading-relaxed text-white/65 md:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Saya mahasiswa Universitas Negeri Makassar yang tertarik pada analisis data dan
              pengembangan aplikasi. Saya terbiasa belajar melalui project, mengolah data dengan
              Excel, SQL, dan Python, serta membangun website atau aplikasi yang responsif dan
              mudah digunakan.
            </motion.p>

            <motion.div
              className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-neon-amber md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-body text-xs text-white/45 md:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {focusAreas.map((item, i) => (
                <FocusCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
