"use client";

import { cn } from '@/lib/utils'

interface WireframeBlocksProps {
  className?: string
}

export default function WireframeBlocks({ className = '' }: Partial<WireframeBlocksProps>) {
  const blocks = [
    { label: 'HeroSpotlight', height: 'h-52' },
    { label: 'CategoryNav', height: 'h-24' },
    { label: 'FeaturedProducts', height: 'h-64' },
    { label: 'TrustBadges', height: 'h-24' },
    { label: 'Testimonials', height: 'h-48' },
    { label: 'Newsletter', height: 'h-32' },
    { label: 'Footer', height: 'h-36' },
  ]

  return (
    <section className={cn('mx-auto max-w-5xl px-4 py-12 md:px-6', className)}>
      <h2 className="mb-4 text-xl font-bold text-[#1A1A2E]">Wireframe Preview</h2>
      <div className="space-y-3">
        {blocks.map((block) => (
          <div key={block.label} className={cn('flex items-center rounded-xl border-2 border-dashed border-[#cbd5e1] bg-[#f8fafc] px-4', block.height)}>
            <span className="text-sm font-medium text-[#475569]">{block.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
