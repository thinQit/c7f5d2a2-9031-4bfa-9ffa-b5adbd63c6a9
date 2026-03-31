"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, BadgeDollarSign, RefreshCw, Sparkles, Headphones, Star, ShieldCheck, Gem, Lock } from 'lucide-react';

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

const iconMap: Record<string, React.ElementType> = { ShieldCheck, Gem, Lock, 
  Shield,
  Truck,
  BadgeDollarSign,
  RefreshCw,
  Sparkles,
  Headphones,
  Star,
};

export default function FeaturesGrid({
  badge = 'Why shoppers choose us',
  headline = 'Built for confident online shopping',
  subheadline = 'Everything you need for a smooth buying experience, from discovery to delivery.',
  features = [
    {
      icon: 'Shield',
      title: 'Secure Checkout',
      description: 'Encrypted payments and trusted gateways protect every transaction.',
    },
    {
      icon: 'Truck',
      title: 'Fast Shipping',
      description: 'Reliable delivery with real-time tracking on every order.',
    },
    {
      icon: 'BadgeDollarSign',
      title: 'Fair Pricing',
      description: 'Competitive prices with frequent promotions and bundle savings.',
    },
    {
      icon: 'RefreshCw',
      title: 'Easy Returns',
      description: 'Hassle-free returns and exchanges within our return window.',
    },
    {
      icon: 'Sparkles',
      title: 'Curated Quality',
      description: 'Handpicked products tested for performance, comfort, and durability.',
    },
    {
      icon: 'Headphones',
      title: 'Human Support',
      description: 'Helpful customer care team ready to assist before and after purchase.',
    },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <Card key={index} className="card-hover border border-border bg-card shadow-sm transition-all">
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
