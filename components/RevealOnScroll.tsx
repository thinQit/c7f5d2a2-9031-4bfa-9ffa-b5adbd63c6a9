'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealOnScrollProps {
  children?: ReactNode
  className?: string
}

export default function RevealOnScroll({ children = null, className = '' }: Partial<RevealOnScrollProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true)
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn('transition-all duration-700', show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0', className)}>
      {children}
    </div>
  )
}
