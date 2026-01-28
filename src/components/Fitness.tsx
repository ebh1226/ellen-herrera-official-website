'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Dumbbell, Heart } from 'lucide-react'
import { fitnessContent } from '@/data/content'

const iconMap: Record<string, React.ElementType> = {
  award: Award,
  users: Users,
  dumbbell: Dumbbell,
  heart: Heart,
}

export default function Fitness() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="fitness" className="section-padding bg-card-bg/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Dumbbell className="text-accent" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">{fitnessContent.headline}</span>
            </h2>
          </div>

          {/* Intro */}
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12 text-lg">
            {fitnessContent.intro}
          </p>

          {/* Certifications Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            {fitnessContent.certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 py-4 bg-accent/10 border-2 border-accent/30 rounded-2xl"
              >
                <Award size={40} className="text-accent" />
                <div>
                  <h3 className="font-bold text-lg text-text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {fitnessContent.highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon] || Heart
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-card-bg border border-card-hover rounded-xl card-hover text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <IconComponent size={28} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-text-primary">
                    {highlight.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-xl md:text-2xl text-text-secondary italic leading-relaxed">
              &ldquo;{fitnessContent.philosophy}&rdquo;
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
