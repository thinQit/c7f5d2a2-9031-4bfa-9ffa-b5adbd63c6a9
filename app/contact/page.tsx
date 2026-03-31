export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ContactForm from "@/components/ContactForm";
import CTAVortex from "@/components/CTAVortex";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="Talk to us."
          subtitle="Have a question about licensing, customization, or using this layout for a client launch? Send a note and we’ll reply within 1 business day."
          primaryCta={{ label: "Email hello@spotlightlanding.com", href: "mailto:hello@spotlightlanding.com" }}
          secondaryCta={{ label: "View FAQ", href: "/#faq" }}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
        <ContactForm
          headline="Send a message"
          subheadline="We’ll get back to you quickly with a clear answer."
          contactInfo={[
            { icon: "Mail", label: "Email", value: "hello@spotlightlanding.com" },
            { icon: "Briefcase", label: "Sales", value: "sales@spotlightlanding.com" },
            { icon: "Clock3", label: "Support Hours", value: "Mon–Fri, 9:00–17:00 (ET)" },
          ]}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-24">
        <CTAVortex
          title="Prefer to self-serve?"
          subtitle="Most questions are answered in the FAQ and pricing sections."
          primaryCta={{ label: "Go to pricing", href: "/#pricing" }}
          secondaryCta={{ label: "Read FAQ", href: "/#faq" }}
          points={["Clear plan comparison", "Refund policy", "Licensing guidance"]}
        />
      </section>
    </main>
  );
}
