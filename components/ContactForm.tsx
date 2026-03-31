"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Sparkles, Shield, Zap, Globe, Star, Heart, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export default function ContactForm({
  headline = "Let’s talk about your growth goals",
  subheadline = "Share a few details and our team will get back to you within one business day.",
  contactInfo = [],
}: Partial<ContactFormProps>) {
  const iconMap: Record<string, React.ElementType> = { Briefcase, 
    Mail,
    Phone,
    MapPin,
    Clock,
    Sparkles,
    Shield,
    Zap,
    Globe,
    Star,
    Heart,
  };

  const safeContactInfo =
    contactInfo.length > 0
      ? contactInfo
      : [
          { icon: "Mail", label: "Email", value: "hello@yourcompany.com" },
          { icon: "Phone", label: "Phone", value: "+1 (555) 123-4567" },
          { icon: "MapPin", label: "Office", value: "San Francisco, CA" },
        ];

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <Card className="card-hover rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your goals..."
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <Button type="submit" className="w-full transition-all duration-200 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {safeContactInfo.length > 0 && (
            <div className="animate-fade-in-up flex flex-col justify-center space-y-8">
              {safeContactInfo.map(function (info, i) {
                const IconComponent = iconMap[info.icon] || Mail;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
