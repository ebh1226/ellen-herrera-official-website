'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import { experienceContent } from '@/data/content'

interface ExperienceCardProps {
  position: typeof experienceContent.positions[0]
  index: number
  isInView: boolean
}

function ExperienceCard({ position, index, isInView }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0)

  const typeColors: Record<string, string> = {
    current: 'bg-green-500/20 text-green-400 border-green-500/30',
    internship: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'full-time': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    freelance: 'bg-accent/20 text-accent border-accent/30',
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-card-hover" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-accent glow" />

      {/* Card */}
      <div
        className={`bg-card-bg border border-card-hover rounded-xl overflow-hidden transition-all duration-300 ${
          isExpanded ? 'shadow-lg shadow-accent/5' : ''
        }`}
      >
        {/* Header - Always visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-card-hover/50 transition-colors"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-text-primary">
                {position.company}
              </h3>
              <span
                className={`px-2 py-0.5 text-xs rounded-full border ${
                  typeColors[position.type] || typeColors.freelance
                }`}
              >
                {position.type === 'current' ? 'Current' : position.type}
              </span>
            </div>
            <p className="text-accent font-medium">{position.role}</p>
            <p className="text-text-secondary text-sm mt-1">{position.period}</p>
          </div>
          <div className="text-text-secondary">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </button>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 space-y-4">
            <p className="text-text-secondary">{position.description}</p>

            {/* Achievements */}
            <ul className="space-y-2">
              {position.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-accent mt-1.5">•</span>
                  {achievement}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {position.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-background rounded-full text-text-secondary border border-card-hover"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="text-accent" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">{experienceContent.headline}</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experienceContent.positions.map((position, index) => (
              <ExperienceCard
                key={position.company + position.role}
                position={position}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
