"use client";

import { Card } from '@/components/ui/card'

interface WireframeMapProps {
  sections?: string[]
}

export default function WireframeMap({
  sections = [
    'Navbar',
    'HeroSpotlight (with hero image)',
    'CategoryNav',
    'FeaturedProducts',
    'TrustBadges',
    'TestimonialsGrid',
    'NewsletterSignup',
    'Footer',
  ],
}: Partial<WireframeMapProps>) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-2xl font-bold text-[#1A1A2E]">Wireframe Preview</h2>
        <div className="space-y-3">
          {sections.map((section, i) => (
            <Card key={section + i} className="rounded-xl border p-4">
              <p className="text-sm font-medium">{i + 1}. {section}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
