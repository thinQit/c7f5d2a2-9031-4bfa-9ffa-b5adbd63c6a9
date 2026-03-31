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
  headline = "Loved by shoppers nationwide",
  subheadline = "Real stories from customers who trust us for quality products, fast shipping, and dependable support.",
  testimonials = [
    {
      quote: "The checkout was smooth, shipping was quick, and the product quality exceeded my expectations.",
      name: "Ava Patel",
      designation: "Verified Buyer",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
    },
    {
      quote: "I’ve ordered multiple times and every package arrives exactly as described. Highly recommended.",
      name: "James Walker",
      designation: "Repeat Customer",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
    },
    {
      quote: "Great value, premium packaging, and excellent support when I had a sizing question.",
      name: "Sophia Nguyen",
      designation: "Verified Buyer",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="animate-fade-in-up">
          <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
        </div>
      </div>
    </section>
  );
}
