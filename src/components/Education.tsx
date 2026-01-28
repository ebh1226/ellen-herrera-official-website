'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { educationContent } from '@/data/content'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap className="text-accent" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">{educationContent.headline}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Degrees */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {educationContent.degrees.map((degree, index) => (
                <div
                  key={index}
                  className="p-6 bg-card-bg border border-card-hover rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {degree.school}
                      </h3>
                      <p className="text-accent font-medium mb-1">
                        {degree.degree}
                      </p>
                      <p className="text-text-secondary text-sm mb-4">
                        Class of {degree.year}
                      </p>
                      {degree.highlights.length > 0 && (
                        <ul className="space-y-1">
                          {degree.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-text-secondary text-sm"
                            >
                              <span className="text-accent mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications & Continuous Learning */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Certifications */}
              <div className="p-6 bg-card-bg border border-card-hover rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={20} className="text-accent" />
                  <h3 className="font-semibold text-text-primary">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-3">
                  {educationContent.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-3 bg-background rounded-lg border border-card-hover"
                    >
                      <p className="font-medium text-text-primary text-sm">
                        {cert.name}
                      </p>
                      <p className="text-text-secondary text-xs">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continuous Learning */}
              <div className="p-6 bg-card-bg border border-card-hover rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={20} className="text-accent" />
                  <h3 className="font-semibold text-text-primary">
                    Continuous Learning
                  </h3>
                </div>
                <div className="space-y-3">
                  {educationContent.continuous.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 bg-background rounded-lg border border-card-hover"
                    >
                      <p className="font-medium text-text-primary text-sm">
                        {item.name}
                      </p>
                      <p className="text-text-secondary text-xs">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
