"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = 'Loved by thousands of shoppers',
  subheadline = '',
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials as TestimonialItem[]} autoplay={autoplay} />
      </div>
    </section>
  );
}
