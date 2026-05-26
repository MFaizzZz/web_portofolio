import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSmartphone, FiGlobe, FiLayout, FiBook } from 'react-icons/fi'

const projects = [
  {
    title: 'HabitFlow App',
    desc: 'Aplikasi Flutter untuk tracking kebiasaan harian dengan analitik progress.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    icon: FiSmartphone,
    color: '#F59E0B',
    github: 'https://github.com/MFaizzZz/HabitFlow',
    demo: null,
    status: 'Completed',
  },
  {
    title: 'MoneyFlow App',
    desc: 'Aplikasi manajemen keuangan pribadi dengan fitur pencatatan transaksi dan analisis keuangan.',
    tags: ['Dart', 'Flutter', 'Firebase'],
    icon: FiSmartphone,
    color: '#38BDF8',
    github: 'https://github.com/MFaizzZz/MoneyFlow',
    demo: null,
    status: 'Completed',
  },
  {
    title: 'LMS Website',
    desc: 'Platform pembelajaran Berbasis website untuk sekolah dengan fitur manajemen tugas',
    tags: ['HTML', 'CSS', 'PHP', 'MYSQL'],
    icon: FiBook,
    color: '#F59E0B',
    github: null,
    demo: 'http://sipandaa.kesug.com',
    status: 'Completed',
  },
  {
    title: 'HabitFlow Landing Page',
    desc: 'Landing page aplikasi pencatat kebiasaan dengan tampilan modern, responsif, dan fokus pada preview produk.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    icon: FiLayout,
    color: '#38BDF8',
    github: null,
    demo: 'https://lphabitflow.vercel.app/',
    status: 'Completed',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = project.icon

  return (
    <motion.article
      ref={ref}
      className="group rounded-2xl border border-white/10 bg-dark-800/55 p-5 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/35"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]" style={{ color: project.color }}>
          <Icon size={19} />
        </div>
        <span className="font-body text-xs text-white/35">{project.status}</span>
      </div>

      <h3 className="font-display text-xl font-bold leading-tight text-white">{project.title}</h3>
      <p className="mt-3 min-h-[3.75rem] font-body text-sm leading-relaxed text-white/52">
        {project.desc}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-body text-xs text-white/45">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-white/55 transition-colors hover:text-white"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub size={15} />
            GitHub
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm transition-colors hover:text-white"
            style={{ color: project.color }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiExternalLink size={15} />
            Visit Website
          </motion.a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mx-auto mb-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-3"
          >
            <span className="tag-pill">Selected Work</span>
          </motion.div>
          <motion.h2
            className="font-display text-4xl font-extrabold text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="mt-4 font-body text-white/50"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Project pilihan dalam pengembangan web, aplikasi mobile, dan analisis data.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
