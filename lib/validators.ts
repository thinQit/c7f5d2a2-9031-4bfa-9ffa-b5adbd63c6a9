import { z } from "zod";

export const checkoutIntentSchema = z.object({
  currency: z.string().min(1),
});

export const checkoutInputSchema = z.object({
  sessionId: z.string().min(1),
  email: z.string().email(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const checkoutSessionSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        priceCents: z.number().optional(),
        quantity: z.number().int().positive().optional(),
      })
    )
    .min(1),
  currency: z.string().min(1),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  sourcePage: z.string().optional(),
});

export const createOrderSchema = z.object({
  stripeCheckoutSessionId: z.string().min(1),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(1),
  email: z.string().email(),
});

export const productSearchQuerySchema = z.object({
  q: z.string().optional().default(""),
  category: z.string().optional(),
  limit: z.preprocess(
    (value) => (typeof value === "string" ? parseInt(value, 10) : value),
    z.number().int().positive().max(50).default(20)
  ),
});
