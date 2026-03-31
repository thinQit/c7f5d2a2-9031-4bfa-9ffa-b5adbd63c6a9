'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children?: React.ReactNode
  className?: string
}

export default function ScrollReveal({
  children = null,
  className = '',
}: Partial<ScrollRevealProps>) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
