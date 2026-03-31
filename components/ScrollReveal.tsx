'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children?: ReactNode
  className?: string
  threshold?: number
  once?: boolean
}

export default function ScrollReveal({
  children = null,
  className = '',
  threshold = 0.2,
  once = true,
}: Partial<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={cn(
        'transform transition-all duration-700',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className
      )}
    >
      {children}
    </div>
  )
}
