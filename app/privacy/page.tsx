export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CTAVortex from "@/components/CTAVortex";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="Privacy Policy"
          subtitle="A straightforward policy for a simple marketing website."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Home", href: "/" }}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <SectionHeader
            headline="What we collect"
            subheadline="We keep data collection minimal."
          />
          <div className="mt-10 space-y-6">
            <Card className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Information you provide</h3>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>If you email us, we receive your email address and message content.</li>
                <li>If you use the contact form, we receive submitted fields (name, email, topic, message).</li>
              </ul>
            </Card>
            <Card className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Analytics</h3>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>If enabled, we may collect aggregated usage data to improve the site.</li>
              </ul>
            </Card>
            <Card className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Data retention</h3>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>We retain support emails as long as needed to provide support and maintain records.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up py-20 md:py-24">
        <CTAVortex
          title="Questions about privacy?"
          subtitle="Email us and we’ll clarify anything in plain language."
          primaryCta={{ label: "Email hello@spotlightlanding.com", href: "mailto:hello@spotlightlanding.com?subject=Privacy%20Question" }}
          secondaryCta={{ label: "Contact page", href: "/contact" }}
          points={["Minimal collection", "No data selling", "Clear retention"]}
        />
      </section>
    </main>
  );
}
