export const dynamic = 'force-dynamic';

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ScrollReveal from "@/components/ScrollReveal"

const frames = [
  {
    title: "Home",
    blocks: ["Sticky Navbar", "HeroSpotlight", "CategoryNav", "FeaturedProducts", "TrustBadges", "TestimonialsGrid", "Newsletter", "Footer"],
  },
  {
    title: "Shop",
    blocks: ["Shop Hero", "Search + Filters + Sort", "Product Grid", "CTA Band", "Footer"],
  },
  {
    title: "Product Detail",
    blocks: ["ProductGallery", "PurchaseModule", "Comparison/Proof", "Reviews", "CTA Band", "Footer"],
  },
  {
    title: "Cart",
    blocks: ["Cart Hero", "Cart Items + Summary", "Footer"],
  },
  {
    title: "Checkout",
    blocks: ["CheckoutSteps", "CheckoutForm", "Footer"],
  },
]

export default function WireframePage() {
  return (
    <main className="py-20 md:py-28 bg-background animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold">Wireframe preview</h1>
          <p className="mt-4 text-muted-foreground">
            A structural map of key pages and conversion flow (browse → product → cart → checkout).
          </p>
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frames.map((frame) => (
            <Card key={frame.title} className="p-6 card-hover">
              <h2 className="text-2xl font-semibold">{frame.title}</h2>
              <Separator className="my-4" />
              <ul className="space-y-2 text-muted-foreground">
                {frame.blocks.map((block) => (
                  <li key={block}>• {block}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
