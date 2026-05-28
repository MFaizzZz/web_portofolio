import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCode, FiDatabase, FiBarChart2,
  FiLayout, FiFileText, FiCpu, FiTrendingUp
} from 'react-icons/fi'

const skills = [
  { name: 'HTML', icon: FiLayout, level: 90, color: '#E34F26', category: 'Web' },
  { name: 'CSS', icon: FiCode, level: 85, color: '#1572B6', category: 'Web' },
  { name: 'JavaScript', icon: FiCpu, level: 80, color: '#F7DF1E', category: 'Web' },
  { name: 'React', icon: FiCode, level: 65, color: '#61DAFB', category: 'Web' },
  { name: 'PHP', icon: FiCode, level: 80, color: '#777BB4', category: 'Web' },
  { name: 'Dart', icon: FiCode, level: 60, color: '#0175C2', category: 'Mobile' },
  { name: 'Flutter', icon: FiCode, level: 55, color: '#02569B', category: 'Mobile' },
  { name: 'Python', icon: FiTrendingUp, level: 52, color: '#3776AB', category: 'Data' },
  { name: 'Excel', icon: FiFileText, level: 68, color: '#217346', category: 'Data' },
  { name: 'SQL', icon: FiDatabase, level: 48, color: '#00D4FF', category: 'Data' },
  { name: 'Data Analysis', icon: FiBarChart2, level: 40, color: '#013243', category: 'Data' },
]

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center">
            <Icon style={{ color: skill.color }} size={16} />
          </div>
          <span className="font-body font-medium text-white/80 text-sm">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-white/40">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-px overflow-hidden bg-white/10">
        <motion.div
          className="relative h-full overflow-hidden"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.07 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.5, delay: index * 0.07 + 1.2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

function SkillCard({ cat, delay, isInView }) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-dark-800/55 p-6 shadow-card backdrop-blur-sm transition-colors duration-300 hover:border-neon-amber/35"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px w-8 bg-neon-amber" />
        <h3 className="font-display font-bold text-white text-lg">{cat} Skills</h3>
      </div>
      <div className="space-y-5">
        {skills.filter(s => s.category === cat).map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding relative">
      {/* Decorative line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-amber/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-3"
          >
            <span className="tag-pill">Tech Stack</span>
          </motion.div>
          <motion.h2
            className="font-display font-extrabold text-4xl md:text-5xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Skills & <span className="text-neon-amber">Expertise</span>
          </motion.h2>
        </div>

        {/* Skill grid - balanced layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">

          {/* Kolom kiri: Web Skills */}
          <SkillCard cat="Web" delay={0.2} isInView={isInView} />

          {/* Kolom kanan: Mobile + Data ditumpuk */}
          <div className="flex flex-col gap-6">
            <SkillCard cat="Mobile" delay={0.3} isInView={isInView} />
            <SkillCard cat="Data" delay={0.4} isInView={isInView} />
          </div>

        </div>

        {/* Tech bubble badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {['Git', 'Figma', 'Tableau', 'Pandas', 'Firebase'].map((tech, i) => (
            <motion.span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-body text-sm text-white/55 transition-colors hover:border-neon-amber/35 hover:text-neon-amber"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.6)' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}