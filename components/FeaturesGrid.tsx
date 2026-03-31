"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Sparkles, Star, Zap, Heart, CheckCircle2, Search, Smartphone } from 'lucide-react';

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

const iconMap: Record<string, React.ElementType> = { Search, Smartphone, 
  Globe,
  Shield,
  Sparkles,
  Star,
  Zap,
  Heart,
  CheckCircle2,
};

export default function FeaturesGrid({
  badge = "Why Teams Choose Us",
  headline = "Everything you need to grow with confidence",
  subheadline = "Built for modern teams that want speed, reliability, and clear results.",
  features = [],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || CheckCircle2;
            return (
              <Card key={index} className="card-hover rounded-xl border border-border bg-card shadow-sm transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: "h-6 w-6" })}
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
