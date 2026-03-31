"use client";

import { CheckCircle2 } from 'lucide-react'

const pages = [
  {
    path: '/',
    modules: [
      "Sticky Navbar (search + cart)",
      "HeroSpotlight (with hero image)",
      "CategoryNav",
      "FeaturedProducts grid",
      "TrustBadges",
      "TestimonialsGrid",
      "Newsletter",
      "Footer",
    ],
  },
  {
    path: '/shop',
    modules: [
      "Filters + search",
      "Product grid",
      "CTA band",
      "Footer",
    ],
  },
  {
    path: '/product/[slug]',
    modules: [
      "Gallery + purchase panel",
      "Specs/Reviews tabs",
      "Proof section",
      "CTA band",
      "Footer",
    ],
  },
  {
    path: '/cart',
    modules: [
      "Cart list",
      "Order summary",
      "Upsell module",
      "Footer",
    ],
  },
  {
    path: '/checkout',
    modules: [
      "Step header",
      "Checkout form + summary",
      "Footer",
    ],
  },
]

export default function WireframeMap({
  headline = "Page structure map",
  subheadline = "Home follows the golden layout: HeroSpotlight → CategoryNav → FeaturedProducts → TrustBadges → TestimonialsGrid → Newsletter → Footer.",
  primaryCta = { label: "View golden layout", href: "/#" },
  secondaryCta = { label: "View components", href: "#components" },
}: {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}) {
  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{headline}</h2>
        <p className="text-muted-foreground mt-2">{subheadline}</p>
        <div className="mt-4 flex flex-row justify-center gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="rounded-lg px-6 py-3 bg-primary text-primary-foreground font-medium transition hover:bg-primary/90"
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="rounded-lg px-6 py-3 border border-border bg-background font-medium transition hover:bg-muted"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {pages.map((page, i) => (
          <div key={i} className="rounded-xl border border-border bg-card shadow-sm p-6">
            <h4 className="font-semibold mb-3">{page.path}</h4>
            <ul className="pl-3 list-disc">
              {page.modules.map((mod, idx) => (
                <li key={idx} className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-primary h-5 w-5" /> {mod}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
