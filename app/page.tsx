export const dynamic = 'force-dynamic';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { BackgroundBeams } from "@/components/ui/backgrounds/background-beams";
import { BackgroundGradient } from "@/components/ui/backgrounds/background-gradient";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Vortex } from "@/components/ui/backgrounds/vortex";
import HeroSpotlight from "@/components/HeroSpotlight";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import GalleryMasonry from "@/components/GalleryMasonry";
import CTAVortex from "@/components/CTAVortex";
import StatsCounter from "@/components/StatsCounter";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577106/site-images/ecommerce/17485353.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <HeroSpotlight
            title="Shop Smarter with Dark-Mode Comfort"
            subtitle="Discover conversion-ready collections, fast shipping confidence, and curated essentials designed for modern lifestyles."
            primaryCta={{ label: "Browse Collections", href: "#categories" }}
            secondaryCta={{ label: "View Featured Deals", href: "#featured" }}
          />
        </div>
      </section>

      <section id="categories" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturesGrid
            badge="Category Discovery"
            headline="Find What You Need in Seconds"
            subheadline="Structured product pathways built for quick product discovery and confident checkout decisions."
            features={[
              {
                icon: "Sparkles",
                title: "Everyday Essentials",
                description: "Reliable, high-demand products for daily routines and lifestyle upgrades.",
              },
              {
                icon: "BadgeCheck",
                title: "Verified Quality",
                description: "Handpicked inventory with trusted sourcing and consistent quality control.",
              },
              {
                icon: "Truck",
                title: "Fast Fulfillment",
                description: "Efficient dispatch and transparent delivery timelines across major regions.",
              },
              {
                icon: "ShieldCheck",
                title: "Secure Checkout",
                description: "Conversion-friendly checkout flow with trusted payment reassurance.",
              },
            ]}
          />
        </div>
      </section>

      <section id="featured" className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <StatsCounter
            stats={[
              { value: "25K+", label: "Orders Delivered" },
              { value: "4.9/5", label: "Average Product Rating" },
              { value: "48h", label: "Avg. Shipping Dispatch" },
              { value: "99%", label: "Checkout Completion Success" },
            ]}
            bgColor="bg-card"
          />
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryMasonry
            headline="Featured Product Moments"
            subheadline="Explore visual highlights from top-performing collections and real shopping contexts."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577106/site-images/ecommerce/15195243.jpg",
                alt: "Customer browsing featured products",
                caption: "Best Seller Discovery",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577128/site-images/ecommerce/16675634.jpg",
                alt: "Lifestyle product flatlay on dark surface",
                caption: "Lifestyle Curation",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577158/site-images/ecommerce/10330120.jpg",
                alt: "Premium product packaging presentation",
                caption: "Premium Packaging",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg",
                alt: "Checkout-ready product assortment",
                caption: "Cart-Ready Picks",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577103/site-images/ecommerce/29502370.jpg",
                alt: "Brand showcase with curated products",
                caption: "Collection Spotlight",
              },
            ]}
          />
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsAnimated
            title="Trusted by Shoppers Who Value Speed & Quality"
            subtitle="Real voices that reinforce confidence before checkout."
            testimonials={[
              {
                quote:
                  "The site made it effortless to compare products and place an order in under two minutes.",
                name: "Alicia Morgan",
                designation: "Repeat Customer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
              },
              {
                quote:
                  "I loved the clean product storytelling and shipping clarity. Exactly what a modern store should feel like.",
                name: "Marcus Lee",
                designation: "First-Time Buyer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
              },
              {
                quote:
                  "Great curation, strong value, and smooth checkout UX. I completed my purchase without friction.",
                name: "Priya Shah",
                designation: "Loyal Subscriber",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
              },
            ]}
            autoplay
          />
        </div>
      </section>

      <section id="cta" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTAVortex
            title="Ready to Complete Your Next Great Purchase?"
            subtitle="Get back to browsing with confidence. Explore featured products, compare quickly, and checkout smoothly."
            ctaLabel="Start Shopping"
            ctaHref="#featured"
            secondaryCtaLabel="Explore Categories"
            secondaryCtaHref="#categories"
          />
        </div>
      </section>
    </main>
  );
}
