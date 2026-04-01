"use client";

import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MapEmbedProps {
  address?: string
  mapSrc?: string
  className?: string
}

export default function MapEmbed({
  address = '245 Via Roma Street, Downtown, New York, NY 10012',
  mapSrc = 'https://www.google.com/maps?q=New+York+NY&output=embed',
  className = '',
}: Partial<MapEmbedProps>) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-16 md:px-6', className)}>
      <div className="grid gap-6 overflow-hidden rounded-2xl border bg-white p-4 md:grid-cols-2 md:p-6">
        <iframe title="Italo Pizza location map" src={mapSrc} className="h-72 w-full rounded-xl border md:h-full" loading="lazy" />
        <div className="flex flex-col justify-center">
          <h3 className="mb-2 text-2xl font-bold text-[#1A1A2E]">Visit Italo Pizza</h3>
          <p className="mb-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4" /> {address}
          </p>
          <Button className="w-fit bg-[#4f46e5] hover:bg-[#4338ca]">Get Directions</Button>
        </div>
      </div>
    </section>
  )
}
