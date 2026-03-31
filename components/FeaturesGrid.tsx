"use client";

import React from "react";
import { Sparkles, Shield, Zap, Globe, Star, Heart, Smartphone, Search, Wrench } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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

export default function FeaturesGrid({
  badge = "Why teams choose us",
  headline = "Built for speed, reliability, and growth",
  subheadline = "Everything you need to launch faster, convert more users, and scale with confidence.",
  features = [],
}: Partial<FeaturesGridProps>) {
  const iconMap: Record<string, React.ElementType> = { Smartphone, Search, Wrench, 
    Sparkles,
    Shield,
    Zap,
    Globe,
    Star,
    Heart,
  };

  const safeFeatures =
    features.length > 0
      ? features
      : [
          {
            icon: "Zap",
            title: "Faster Execution",
            description: "Automate repetitive workflows and ship high-impact work in less time.",
          },
          {
            icon: "Shield",
            title: "Enterprise-Grade Security",
            description: "Protect customer data with robust controls, permissions, and audit readiness.",
          },
          {
            icon: "Globe",
            title: "Scale Globally",
            description: "Deliver consistent experiences across teams, regions, and customer segments.",
          },
        ];

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="animate-fade-in-up mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {safeFeatures.map(function (feature, index) {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="card-hover rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="h-6 w-6" />
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
