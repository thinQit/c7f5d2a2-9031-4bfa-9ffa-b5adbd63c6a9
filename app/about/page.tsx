export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CTAVortex from "@/components/CTAVortex";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="Built for clarity, speed, and trust."
          subtitle="Spotlight Landing is a lightweight marketing site blueprint designed around proven conversion patterns—so you can focus on your offer, not your layout."
          primaryCta={{ label: "See features", href: "/#features" }}
          secondaryCta={{ label: "View pricing", href: "/#pricing" }}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            headline="A small team that ships."
            subheadline="Design and engineering working together to keep things clean and conversion-focused."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Avery Brooks",
                role: "Design Systems",
                bio: "Builds the typography, spacing, and component rhythm that keeps pages feeling premium and readable.",
                image:
                  "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              },
              {
                name: "Noah Kim",
                role: "Front-end Engineering",
                bio: "Implements fast, accessible components with Tailwind + shadcn/ui and smooth micro-interactions.",
                image:
                  "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
              },
              {
                name: "Leila Hassan",
                role: "Copy & Positioning",
                bio: "Writes benefit-focused headlines and objection-handling FAQs that improve conversion.",
                image:
                  "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
              },
            ].map((person) => (
              <Card key={person.name} className="card-hover rounded-xl border border-border bg-card p-6">
                <div
                  className="h-48 w-full rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${person.image})` }}
                />
                <h3 className="mt-4 text-xl font-semibold">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{person.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up py-20 md:py-24">
        <CTAVortex
          title="Want this layout for your launch?"
          subtitle="Use the same proven section order and swap in your brand and copy."
          primaryCta={{ label: "Go to pricing", href: "/#pricing" }}
          secondaryCta={{ label: "Email hello@spotlightlanding.com", href: "mailto:hello@spotlightlanding.com" }}
          points={["Fast setup", "Clean design system", "Conversion-optimized flow"]}
        />
      </section>
    </main>
  );
}
