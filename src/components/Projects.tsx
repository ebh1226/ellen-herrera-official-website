'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FolderGit2, ExternalLink, Building2 } from 'lucide-react'
import { projectsContent } from '@/data/content'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-card-bg/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <FolderGit2 className="text-accent" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">{projectsContent.headline}</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsContent.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card-bg border border-card-hover rounded-xl overflow-hidden card-hover flex flex-col"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-background flex items-center justify-center border-b border-card-hover">
                  <FolderGit2
                    size={48}
                    className="text-text-secondary/30 group-hover:text-accent/50 transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Company Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={14} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary">
                      {project.company}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-text-secondary text-xs"
                      >
                        <span className="text-accent mt-0.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-background rounded text-text-secondary border border-card-hover"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-text-secondary">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium transition-colors"
                    >
                      View Project
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
