export const dynamic = 'force-dynamic';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsCounter from "@/components/StatsCounter";
import GalleryMasonry from "@/components/GalleryMasonry";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CTAVortex from "@/components/CTAVortex";

const collections = [
  {
    title: "Everyday Essentials",
    description: "Build a reliable routine with products that ship fast and stay in stock.",
    image: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577162/site-images/ecommerce/35560482.jpg",
  },
  {
    title: "Premium Home Finds",
    description: "Design-forward pieces curated for modern spaces and effortless upgrades.",
    image: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577136/site-images/ecommerce/16675632.jpg",
  },
  {
    title: "Travel & On-the-Go",
    description: "Compact, dependable gear made for commutes, trips, and fast-paced schedules.",
    image: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577129/site-images/ecommerce/16675635.jpg",
  },
];

const comparisonRows = [
  {
    label: "Product clarity",
    ours: "Detailed specs, transparent pricing, and comparison cues",
    typical: "Sparse descriptions and unclear options",
  },
  {
    label: "Shipping confidence",
    ours: "48-hour dispatch promise with tracking updates",
    typical: "Unknown fulfillment timelines",
  },
  {
    label: "Checkout flow",
    ours: "Minimal steps, trusted payment reassurance",
    typical: "Multi-step friction and unclear confirmation",
  },
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577147/site-images/ecommerce/35541612.jpg"
            alt="Storefront hero backdrop"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10">
          <HeroSpotlight
            headline="Shop With Clarity, Checkout With Confidence"
            subheadline="A modern product-led storefront that guides customers from discovery to purchase with clear pricing, fast shipping, and trusted checkout steps."
            primaryCta={{ label: "Browse Collections", href: "#collections" }}
            secondaryCta={{ label: "See Proof", href: "#proof" }}
          />
        </div>
      </section>

      <section id="collections" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Collection Discovery</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Curated pathways built for fast product decisions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with the collection that matches your intent, then compare essentials and move to checkout without extra steps.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {collections.map((item) => (
              <Card key={item.title} className="overflow-hidden border-border bg-card shadow-sm">
                <div className="relative h-48 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" unoptimized />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  <Button variant="secondary" className="mt-5" asChild>
                    <a href="#cta">Explore {item.title}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Proof & Comparison</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A storefront designed to convert faster than typical online shops
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We focus on clarity, speed, and trust signals that reduce friction at every step of the purchase journey.
              </p>
              <div className="mt-8 space-y-4">
                {comparisonRows.map((row) => (
                  <div key={row.label} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">{row.label}</p>
                    <div className="mt-3 grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-xs font-semibold text-muted-foreground">Sankalp</p>
                        <p className="mt-2 text-sm text-foreground">{row.ours}</p>
                      </div>
                      <div className="rounded-lg bg-background p-4">
                        <p className="text-xs font-semibold text-muted-foreground">Typical Store</p>
                        <p className="mt-2 text-sm text-muted-foreground">{row.typical}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <StatsCounter
                stats={[
                  { value: "25K+", label: "Orders Delivered" },
                  { value: "4.9/5", label: "Average Rating" },
                  { value: "48h", label: "Avg. Dispatch" },
                  { value: "99%", label: "Checkout Success" },
                ]}
                bgColor="bg-card"
              />
              <div className="rounded-xl border border-border bg-muted p-6">
                <h3 className="text-xl font-semibold text-foreground">Conversion-focused product storytelling</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Guide customers with succinct feature highlights, clear pricing, and quick comparison cues that keep intent high.
                </p>
                <Button className="mt-5" asChild>
                  <a href="#cta">View Checkout Flow</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto max-w-7xl px-4">
          <FeaturesGrid
            badge="Trust & Shipping"
            headline="Reassurance built into every step"
            subheadline="Everything shoppers need to feel confident about delivery, returns, and payments before they click purchase."
            features={[
              {
                icon: "Truck",
                title: "48-hour dispatch promise",
                description: "Orders are processed quickly with real-time tracking updates the moment they ship.",
              },
              {
                icon: "ShieldCheck",
                title: "Secure payment stack",
                description: "Encrypted checkout flow with fraud monitoring and trusted payment methods.",
              },
              {
                icon: "RefreshCcw",
                title: "30-day returns",
                description: "Straightforward return labels and instant store credit options.",
              },
              {
                icon: "BadgeCheck",
                title: "Verified quality sourcing",
                description: "Every product is vetted for durability, packaging, and consistent inventory.",
              },
              {
                icon: "Globe",
                title: "Global delivery coverage",
                description: "Optimized fulfillment across major regions with transparent timelines.",
              },
              {
                icon: "Heart",
                title: "Customer-first support",
                description: "Dedicated help team for order changes, product questions, and delivery updates.",
              },
            ]}
          />
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryMasonry
            headline="Checkout-ready product moments"
            subheadline="A visual snapshot of the collections shoppers are adding to cart this season."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577106/site-images/ecommerce/15195243.jpg",
                alt: "Customer browsing featured products",
                caption: "Best Seller Discovery",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577128/site-images/ecommerce/16675634.jpg",
                alt: "Lifestyle product flatlay on dark surface",
                caption: "Lifestyle Curation",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577158/site-images/ecommerce/10330120.jpg",
                alt: "Premium product packaging presentation",
                caption: "Premium Packaging",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577110/site-images/ecommerce/17485350.jpg",
                alt: "Checkout-ready product assortment",
                caption: "Cart-Ready Picks",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577103/site-images/ecommerce/29502370.jpg",
                alt: "Brand showcase with curated products",
                caption: "Collection Spotlight",
              },
            ]}
          />
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsAnimated
            headline="Trusted by shoppers who want a faster checkout"
            subheadline="Real feedback that reassures new customers before they place an order."
            testimonials={[
              {
                quote: "I found the exact bundle I needed, compared options quickly, and checked out in under two minutes.",
                name: "Alicia Morgan",
                designation: "Repeat Customer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577141/site-images/ecommerce/234352.jpg",
              },
              {
                quote: "The shipping estimates and return policy were crystal clear, which made the decision easy.",
                name: "Marcus Lee",
                designation: "First-Time Buyer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577164/site-images/ecommerce/11952301.jpg",
              },
              {
                quote: "Smooth checkout flow and quick delivery updates—exactly what I want from an online store.",
                name: "Priya Shah",
                designation: "Loyal Subscriber",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577152/site-images/ecommerce/11952304.jpg",
              },
            ]}
            autoplay
          />
        </div>
      </section>

      <section id="cta" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <CTAVortex
            headline="Ready to move from browsing to checkout?"
            description="Start with curated collections, confirm shipping clarity, and finish with a streamlined payment flow in minutes."
            ctaLabel="Start Shopping"
            ctaHref="#collections"
            secondaryCtaLabel="View Proof"
            secondaryCtaHref="#proof"
          />
        </div>
      </section>
    </main>
  );
}
