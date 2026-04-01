export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import MapEmbed from "@/components/MapEmbed";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

export default function ContactPage() {
  return (
    <main className="pt-16">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          headline="Contact Italo Pizza"
          subheadline="Questions, catering requests, or feedback—reach out anytime. We usually respond within 1 business day."
          primaryCta={{ label: "Call (718) 555-0147", href: "tel:+17185550147" }}
          secondaryCta={{ label: "Order Online", href: "/order" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ContactForm
            headline="Send a Message"
            subheadline="This is a simple static form (no submission processing by default)."
            contactInfo={[
              { icon: "MapPin", label: "Address", value: "214 Via Roma Ave, Brooklyn, NY 11211" },
              { icon: "Phone", label: "Phone", value: "(718) 555-0147" },
              { icon: "Mail", label: "Email", value: "hello@italopizza.com" },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <MapEmbed />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CtaBand />
        </div>
      </section>
    </main>
  );
}
