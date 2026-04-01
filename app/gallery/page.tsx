export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import GalleryMasonry from "@/components/GalleryMasonry";
import CtaBand from "@/components/CtaBand";

export default function GalleryPage() {
  return (
    <main className="pt-16">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          headline="A Closer Look"
          subheadline="From blistered crust to silky pasta—here’s what’s coming out of our kitchen."
          primaryCta={{ label: "Order These", href: "/order" }}
          secondaryCta={{ label: "View Menu", href: "/menu" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryMasonry
            headline="Food Gallery"
            subheadline="Appetizing, high-contrast shots that make ordering irresistible."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg",
                alt: "Close-up pizza crust and bubbling cheese",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577143/site-images/ecommerce/18512823.jpg",
                alt: "Creamy pasta in bowl with herbs",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485351.jpg",
                alt: "Golden starter plate on wooden table",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577108/site-images/ecommerce/29502367.jpg",
                alt: "Dessert close-up with cocoa dusting",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg",
                alt: "Spicy pizza topped with salami",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577162/site-images/ecommerce/35560482.jpg",
                alt: "Chef finishing plate in modern kitchen",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CtaBand />
        </div>
      </section>
    </main>
  );
}
