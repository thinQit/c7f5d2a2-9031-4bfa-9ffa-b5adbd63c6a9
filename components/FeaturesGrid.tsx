"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Shield, Truck, Star, Tag, Sparkles, ShieldCheck, Package, CheckCircle } from 'lucide-react';

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
  badge = "Featured Products",
  headline = "Top picks designed for everyday value",
  subheadline = "Discover customer-favorite essentials with exclusive offers, fast shipping, and quality you can trust.",
  features = [
    { icon: "Tag", title: "Flash Sale Bundles", description: "Save more when you shop curated bundles with limited-time discounts." },
    { icon: "Truck", title: "Fast Delivery", description: "Get your orders quickly with reliable delivery and real-time tracking." },
    { icon: "Shield", title: "Secure Checkout", description: "Protected payments and trusted transactions every step of the way." },
    { icon: "Gift", title: "Gift-Ready Picks", description: "Find beautifully packaged gifts for every season and celebration." },
    { icon: "Star", title: "Best Seller Quality", description: "Shop highly rated products loved by thousands of happy customers." },
    { icon: "Sparkles", title: "New Weekly Drops", description: "Fresh arrivals every week to keep your cart ahead of the trends." },
  ],
}: Partial<FeaturesGridProps>) {
  const iconMap: Record<string, React.ElementType> = { ShieldCheck, Package, CheckCircle,  Gift, Shield, Truck, Star, Tag, Sparkles };
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <Badge className="mb-4">{badge}</Badge>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="border border-border bg-card shadow-sm hover:shadow-lg transition-shadow card-hover">
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
