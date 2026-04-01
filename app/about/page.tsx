export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import CtaBand from "@/components/CtaBand";

export default function AboutPage() {
  return (
    <main className="pt-16">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          headline="A Modern Slice of Italy"
          subheadline="Italo Pizza blends traditional Italian recipes with a clean, modern kitchen—so every order tastes like it came straight from the oven."
          primaryCta={{ label: "Meet the Team", href: "/about#team" }}
          secondaryCta={{ label: "See Our Ingredients", href: "/about#ingredients" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up" id="ingredients">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturesGrid
            badge="Our Craft"
            headline="Ingredients You Can Taste"
            subheadline="Simple, high-quality components—handled with care."
            features={[
              {
                icon: "Clock",
                title: "48-hour dough",
                description: "Slow fermentation for airy crust and deep flavor.",
              },
              {
                icon: "Droplets",
                title: "Fresh mozzarella",
                description: "Creamy melt and clean finish on every slice.",
              },
              {
                icon: "Tomato",
                title: "San Marzano-style sauce",
                description: "Bright tomato base with basil and garlic.",
              },
              {
                icon: "Sprout",
                title: "Seasonal produce",
                description: "Local greens, mushrooms, and herbs when they’re at their best.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up" id="team">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsAnimated
            title="Meet the People Behind the Pies"
            subtitle="A small team obsessed with consistency and hospitality."
            autoplay
            testimonials={[
              {
                quote:
                  "Trained in Naples-style dough technique and fermentation. Keeps the crust crisp, airy, and consistent.",
                name: "Luca Romano",
                designation: "Co-Founder • Head of Dough",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
              },
              {
                quote:
                  "Leads the line with a focus on timing, quality, and clean flavors—especially sauces and pasta finishes.",
                name: "Giulia Romano",
                designation: "Co-Founder • Kitchen Director",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
              },
              {
                quote:
                  "Specializes in starters and desserts—arancini, tiramisu, and seasonal specials.",
                name: "Enzo Bianchi",
                designation: "Chef de Partie",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
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
