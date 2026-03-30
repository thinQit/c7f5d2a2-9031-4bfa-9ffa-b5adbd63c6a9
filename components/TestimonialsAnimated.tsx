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
  headline = "Loved by thousands of happy shoppers",
  subheadline = "Real experiences from customers who trust NovaCart for quality and value.",
  testimonials = [
    {
      quote: "The checkout was seamless and my order arrived faster than expected. NovaCart made online shopping feel effortless.",
      name: "Ava Reynolds",
      designation: "Verified Customer",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
    },
    {
      quote: "I found amazing deals without compromising quality. Every product matched the photos and descriptions perfectly.",
      name: "Jordan Lee",
      designation: "Frequent Buyer",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
    },
    {
      quote: "Customer support responded quickly and solved my shipping question in minutes. I’ll definitely order again.",
      name: "Mina Patel",
      designation: "First-Time Shopper",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
