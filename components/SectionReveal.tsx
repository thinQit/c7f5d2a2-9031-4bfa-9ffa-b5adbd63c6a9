'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionRevealProps {
  children?: ReactNode
}

export default function SectionReveal({ children = null }: Partial<SectionRevealProps>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
