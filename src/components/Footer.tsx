'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { footerContent, siteConfig } from '@/data/content'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 bg-card-bg/50 border-t border-card-hover">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            &copy; {footerContent.copyright}
          </p>

          {/* Built with */}
          <p className="text-text-secondary text-sm">
            {footerContent.builtWith}
          </p>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-card-bg border border-card-hover flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
