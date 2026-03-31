'use client';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

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
  headline = 'Loved by shoppers everywhere',
  subheadline = 'Real feedback from customers who trust us for quality and convenience.',
  testimonials = [
    {
      quote: 'Every order arrives quickly and exactly as described. The quality is consistently impressive.',
      name: 'Maya Thompson',
      designation: 'Verified Buyer',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg',
    },
    {
      quote: 'Customer support helped me pick the right product in minutes. Smooth, friendly, and fast.',
      name: 'Daniel Rivera',
      designation: 'Repeat Customer',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg',
    },
    {
      quote: 'Great prices, secure checkout, and easy returns. It is now my go-to store for everyday essentials.',
      name: 'Ava Chen',
      designation: 'Loyal Member',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg',
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
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
