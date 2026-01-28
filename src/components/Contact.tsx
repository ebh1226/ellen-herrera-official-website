'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { contactContent, siteConfig } from '@/data/content'

const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Send className="text-accent" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">{contactContent.headline}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-lg mb-10">
            {contactContent.description}
          </p>

          {/* Email Button */}
          <motion.a
            href={`mailto:${contactContent.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors duration-200 glow mb-10"
          >
            <Mail size={20} />
            {contactContent.email}
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {contactContent.socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon] || Mail
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-card-bg border border-card-hover flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-200"
                  aria-label={social.platform}
                >
                  <IconComponent size={24} />
                </motion.a>
              )
            })}
          </div>

          {/* Location */}
          <p className="text-text-secondary text-sm mt-10">
            Based in {siteConfig.location}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
