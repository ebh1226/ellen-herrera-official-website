'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User } from 'lucide-react'
import { aboutContent } from '@/data/content'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">{aboutContent.headline}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full rounded-2xl bg-card-bg border border-card-hover flex items-center justify-center overflow-hidden">
                  {aboutContent.image && aboutContent.image !== '/images/profile.jpg' ? (
                    <img
                      src={aboutContent.image}
                      alt="Ellen Herrera"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={120} className="text-text-secondary" />
                  )}
                </div>
                {/* Decorative border */}
                <div className="absolute -inset-2 rounded-2xl border-2 border-accent/20 -z-10" />
                <div className="absolute -inset-4 rounded-2xl border border-accent/10 -z-20" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16"
          >
            {aboutContent.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card-bg border border-card-hover card-hover"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
