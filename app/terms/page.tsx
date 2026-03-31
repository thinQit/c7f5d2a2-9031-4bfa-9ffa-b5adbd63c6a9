export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CTAVortex from "@/components/CTAVortex";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="Terms"
          subtitle="Simple terms for using the template and site."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Privacy Policy", href: "/privacy" }}
        />
      </section>

      <section className="animate-fade-in-up py-20 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Usage and licensing"
            subheadline="Clear expectations for personal, commercial, and team use."
          />
          <div className="mt-10 space-y-6">
            <Card className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">License scope</h3>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Starter/Pro: single project license.</li>
                <li>Team: up to 3 project licenses.</li>
              </ul>
            </Card>
            <Card className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Refunds</h3>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Refund requests accepted within 14 days of purchase.</li>
              </ul>
            </Card>
            <Card className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">Support</h3>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Email support is provided on business days (Mon–Fri).</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up py-20 md:py-24">
        <CTAVortex
          title="Need a custom license?"
          subtitle="If you’re an agency launching many sites, we can help."
          primaryCta={{ label: "Email sales@spotlightlanding.com", href: "mailto:sales@spotlightlanding.com?subject=Custom%20License" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          points={["Agency-friendly options", "Fast replies", "Clear terms"]}
        />
      </section>
    </main>
  );
}
