export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import GalleryMasonry from "@/components/GalleryMasonry";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CTASparkles from "@/components/CTASparkles";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <div
          className="relative min-h-[80vh] overflow-hidden"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10">
            <HeroSpotlight
              headline="Build your everyday kit in minutes—then check out in one tap."
              subheadline="Curated essentials across Tech, Home, and Travel. Transparent pricing, fast shipping, and 30-day returns—so you can buy with confidence."
              primaryCta={{ label: "Shop best sellers", href: "/collections/best-sellers" }}
              secondaryCta={{ label: "Browse all collections", href: "/collections" }}
            />
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <FeaturesGrid
          badge="Shop by collection"
          headline="Find the right collection fast"
          subheadline="Start broad, then narrow with filters like price, rating, and in-stock—built for quick product discovery."
          features={[
            {
              icon: "Laptop",
              title: "Tech Essentials",
              description: "Chargers, cables, desk gear, and travel-friendly accessories.",
            },
            {
              icon: "Home",
              title: "Home Comfort",
              description: "Soft goods and practical upgrades that feel premium every day.",
            },
            {
              icon: "Backpack",
              title: "Travel Ready",
              description: "Bottles, organizers, and lightweight gear for life on the move.",
            },
            {
              icon: "Gift",
              title: "Gifts Under $50",
              description: "High-impact picks that ship fast and stay budget-friendly.",
            },
          ]}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-28 bg-background">
        <GalleryMasonry
          headline="Featured products customers reorder"
          subheadline="A tight visual grid of our most-loved essentials—clear value, honest specs, and premium finish."
          images={[
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577109/site-images/ecommerce/10330112.jpg",
              alt: "Compact fast charger on a clean desk setup",
              caption: "AeroCharge 65W GaN Charger — Best Seller",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg",
              alt: "Soft woven throw blanket in a bright living room",
              caption: "CloudWeave Throw Blanket — New",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577167/site-images/ecommerce/29502369.jpg",
              alt: "Insulated bottle styled with travel accessories",
              caption: "TrailSip Insulated Bottle — Top Rated",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577129/site-images/ecommerce/16675635.jpg",
              alt: "Organized packing cubes in a suitcase",
              caption: "PackCube Organizer Set — Bundle Pick",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg",
              alt: "Desk mat and workspace accessories in neutral tones",
              caption: "DeskMat Pro — Staff Pick",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577103/site-images/ecommerce/29502370.jpg",
              alt: "Canvas tote bag with everyday carry items",
              caption: "Everyday Canvas Tote — Under $25",
            },
          ]}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <StatsCounter
          stats={[
            { value: "4.8★", label: "Average verified rating" },
            { value: "3,870", label: "Reviews in the last 12 months" },
            { value: "24h", label: "Typical warehouse dispatch window" },
            { value: "30 days", label: "Easy returns with prepaid labels" },
          ]}
          bgColor="bg-muted"
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-28 bg-background">
        <TestimonialsAnimated
          headline="Loved for quality—and the little details"
          subheadline="Verified reviews from customers who came back for a second order."
          autoplay
          testimonials={[
            {
              quote:
                "The GaN charger replaced two bricks in my bag. Arrived in two days and the packaging was spotless.",
              name: "Maya R.",
              designation: "Seattle, WA • AeroCharge 65W",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
            },
            {
              quote:
                "I’ve tried a lot of bottles—this one finally doesn’t drip in my backpack. Keeps ice overnight too.",
              name: "Jordan K.",
              designation: "Austin, TX • TrailSip 24oz",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
            },
            {
              quote:
                "The throw is soft and breathable. Looks great on the couch and washes well.",
              name: "Elena S.",
              designation: "Brooklyn, NY • CloudWeave Throw",
              src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
            },
          ]}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <CTASparkles
          headline="Get early access to drops and restocks"
          description="One email a week max. Members get restock alerts, bundle deals, and first dibs on limited colors. Plus 10% off your first order after confirmation."
          ctaLabel="Join the list"
          ctaHref="/#newsletter"
          secondaryCtaLabel="View new arrivals"
          secondaryCtaHref="/collections/new-arrivals"
        />
      </section>
    </main>
  );
}
