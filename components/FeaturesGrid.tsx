"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, BadgeCheck, Sparkles, Gift, RefreshCw, ShieldCheck } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { ShieldCheck, 
  Shield,
  Truck,
  BadgeCheck,
  Sparkles,
  Gift,
  RefreshCw,
};

export default function FeaturesGrid({
  badge = "Why Shop With Us",
  headline = "Everything you need for confident online shopping",
  subheadline = "From curated collections to secure checkout, discover products and perks designed around convenience and trust.",
  features = [
    {
      icon: "Shield",
      title: "Secure Checkout",
      description: "Shop safely with encrypted payments and trusted global payment providers.",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg",
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "Quick shipping options and order tracking from checkout to doorstep.",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/34577.jpg",
    },
    {
      icon: "BadgeCheck",
      title: "Quality Guaranteed",
      description: "Every product is carefully vetted to ensure quality, value, and reliability.",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/259200.jpg",
    },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="animate-fade-in-up mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="card-hover rounded-xl border border-border bg-card shadow-sm transition-all">
                <CardContent className="p-0">
                  {feature.imageUrl && (
                    <div className="relative h-52 w-full overflow-hidden rounded-t-xl">
                      <Image
                        src={feature.imageUrl}
                        alt={feature.title}
                        width={1200}
                        height={800}
                        unoptimized
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
