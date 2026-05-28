import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSmartphone, FiGlobe, FiLayout, FiBook, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

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
    image: '/habitflow.jpeg'
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
    image: '/moneyflow.png'
  },
  {
    title: 'LMS Website',
    desc: 'Platform pembelajaran berbasis website untuk sekolah dengan fitur manajemen tugas.',
    tags: ['HTML', 'CSS', 'PHP', 'MYSQL'],
    icon: FiBook,
    color: '#F59E0B',
    github: null,
    demo: 'http://sipandaa.kesug.com',
    status: 'Completed',
    image: '/lms.png'
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
    image: '/landingpage.png'
  },
  // ── Tambah project baru di sini ──────────────────────────────────────────
  // {
  //   title: 'Project Baru',
  //   desc: 'Deskripsi project baru kamu.',
  //   tags: ['React', 'Node.js'],
  //   icon: FiGlobe,
  //   color: '#A78BFA',
  //   github: 'https://github.com/...',
  //   demo: null,
  //   status: 'In Progress',
  //   image: '/images/project-baru.png',
  // },
]

// ─── CARD ─────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.article
      className="group relative flex-shrink-0 w-72 md:w-80 rounded-2xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-sm overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-amber-500/10 hover:shadow-2xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Image / Placeholder ── */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.06]">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder: icon besar di tengah */
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] ring-1 ring-white/10"
              style={{ color: project.color }}
            >
              <Icon size={28} />
            </div>
            <span className="font-body text-[11px] uppercase tracking-widest text-white/20">
              No Preview
            </span>
          </div>
        )}

        {/* Gradient overlay bawah */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d1117] to-transparent" />

        {/* Status badge */}
        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 font-body text-[10px] text-white/40 backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="p-5 pt-4">
        {/* Icon kecil + title */}
        <div className="mb-1 flex items-center gap-2.5">
          <div
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.05]"
            style={{ color: project.color }}
          >
            <Icon size={14} />
          </div>
          <h3 className="font-display text-lg font-bold leading-tight text-white">
            {project.title}
          </h3>
        </div>

        <p className="mt-2 min-h-[3.5rem] font-body text-[13px] leading-relaxed text-white/50">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2 py-0.5 font-body text-[11px] text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-[13px] text-white/50 transition-colors hover:text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiGithub size={13} />
              GitHub
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-[13px] transition-colors hover:brightness-125"
              style={{ color: project.color }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiExternalLink size={13} />
              Visit Website
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ─── SECTION ──────────────────────────────────────────────────────────────────
export default function Projects() {
  const headRef = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(headRef, { once: true, margin: '-80px' })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const CARD_W = 336 // w-80 + gap

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * CARD_W, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div ref={headRef} className="mx-auto mb-10 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-3"
          >
            <span className="tag-pill">Selected Work</span>
          </motion.div>
          <motion.h2
            className="font-display text-4xl font-extrabold text-white md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
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

        {/* ── Carousel Wrapper ── */}
        <div className="relative">
          {/* Fade kiri */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[inherit] to-transparent transition-opacity duration-300"
            style={{ opacity: canScrollLeft ? 1 : 0 }}
          />
          {/* Fade kanan */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[inherit] to-transparent" />

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',       /* Firefox */
              msOverflowStyle: 'none',      /* IE/Edge */
            }}
          >
            {/* hide webkit scrollbar via inline — Tailwind doesn't have a built-in class */}
            <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
            {/* Spacer agar card terakhir tidak tertutup fade */}
            <div className="flex-shrink-0 w-4" />
          </div>

          {/* ── Nav Arrows ── */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all hover:border-amber-500/40 hover:text-amber-400 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <FiChevronLeft size={17} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => {
                    scrollRef.current?.scrollTo({ left: i * CARD_W, behavior: 'smooth' })
                  }}
                  className="h-1.5 rounded-full bg-white/20 transition-all hover:bg-amber-400"
                  style={{ width: i === 0 ? 20 : 6 }}
                  aria-label={`Go to ${p.title}`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all hover:border-amber-500/40 hover:text-amber-400 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <FiChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}