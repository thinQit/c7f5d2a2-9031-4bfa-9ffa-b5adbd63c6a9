"use client";

import { cn } from '@/lib/utils'

interface LogoCloudProps {
  title: string
  note: string
  logos: string[]
}

export default function LogoCloud({
  title = 'Trusted by high-growth teams worldwide',
  note = 'From seed-stage startups to global enterprise teams.',
  logos = ['NovaCorp', 'Vertex', 'Aperture', 'Catalyst', 'Northstar', 'PulseLabs'],
}: Partial<LogoCloudProps>) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">{title}</p>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className={cn(
                'flex h-14 items-center justify-center rounded-xl border border-border bg-white text-sm font-semibold tracking-wide text-[#111827]/70',
                'grayscale transition hover:grayscale-0 hover:text-[#111827]'
              )}
            >
              {logo}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">{note}</p>
      </div>
    </section>
  )
}
