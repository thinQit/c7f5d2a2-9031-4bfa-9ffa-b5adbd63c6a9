"use client";

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, RefreshCw, Sparkles, Tags, CreditCard, ShieldCheck, Mail, Phone, Clock } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { ShieldCheck, Mail, Phone, Clock, 
  Shield,
  Truck,
  RefreshCw,
  Sparkles,
  Tags,
  CreditCard,
};

export default function FeaturesGrid({
  badge = 'Why shoppers choose NovaCart',
  headline = 'Everything you need for confident online shopping',
  subheadline = 'From secure payments to fast fulfillment, NovaCart is built for trust and convenience.',
  features = [],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="card-hover border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
