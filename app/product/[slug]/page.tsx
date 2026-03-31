export const dynamic = 'force-dynamic';

import GalleryMasonry from "@/components/GalleryMasonry";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductDetailPage() {
  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577129/site-images/ecommerce/16675635.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold">Product details that answer questions fast.</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/90">
            Clear photos, specs, reviews, and shipping—everything you need before checkout.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <GalleryMasonry
            headline="See it from every angle"
            subheadline="Zoom in on finishes, details, and materials."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577108/site-images/ecommerce/29502367.jpg",
                alt: "Product detail close-up",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/10330106.jpg",
                alt: "Product on desk setup",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577158/site-images/ecommerce/10330120.jpg",
                alt: "Lifestyle product usage",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577158/site-images/ecommerce/29502357.jpg",
                alt: "Alternative angle",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <FeaturesGrid
            badge="Product Proof"
            headline="Why it’s worth it."
            subheadline="Materials, fit, and performance—explained with specifics."
            features={[
              {
                icon: "ShieldCheck",
                title: "Durable materials",
                description: "Built with premium-grade components for long-term daily use.",
              },
              {
                icon: "Truck",
                title: "Fast fulfillment",
                description: "In-stock items typically ship within 24 hours from U.S. warehouses.",
              },
              {
                icon: "RefreshCw",
                title: "Easy returns",
                description: "30-day returns with straightforward policy and quick support.",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <TestimonialsAnimated
            title="Verified reviews"
            subtitle="Photos, ratings, and real-world feedback."
            testimonials={[
              {
                quote: "The quality is exactly what I hoped for—premium feel and perfect finish.",
                name: "Maya R.",
                designation: "Verified buyer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577128/site-images/ecommerce/32831065.jpg",
              },
              {
                quote: "Shipping was quick and packaging was clean. Great buying experience.",
                name: "Jordan K.",
                designation: "Verified buyer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577143/site-images/ecommerce/18512823.jpg",
              },
              {
                quote: "Use it every day now. Feels durable and thoughtfully designed.",
                name: "Sofia L.",
                designation: "Verified buyer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577117/site-images/ecommerce/29502363.jpg",
              },
            ]}
            autoplay
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <CTAVortex
            title="Ready to add it to your setup?"
            subtitle="Secure checkout, free shipping over $50, and 30-day returns."
            ctaLabel="Add to Cart"
            ctaHref="#add-to-cart"
            secondaryCtaLabel="Shipping & Returns"
            secondaryCtaHref="/shipping-returns"
          />
        </section>
      </ScrollReveal>
    </main>
  );
}
