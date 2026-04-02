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

export const newsletterSubscribeSchema = newsletterSchema;

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

export const cartActionSchema = z.object({
  sessionId: z.string().min(1),
  action: z.enum(["add", "update", "remove"]),
  item: z.object({
    productId: z.string().min(1),
    variantId: z.string().optional(),
    quantity: z.number().int().positive().optional(),
  }),
});

export const createCheckoutSchema = z.object({
  cartSessionId: z.string().min(1),
  email: z.string().email(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  topic: z.string().optional(),
  message: z.string().min(1),
});

export const productsQuerySchema = z.object({
  category: z.string().optional(),
  minPrice: z.preprocess(
    (v) => (typeof v === "string" ? parseFloat(v) : v),
    z.number().nonnegative().optional()
  ),
  maxPrice: z.preprocess(
    (v) => (typeof v === "string" ? parseFloat(v) : v),
    z.number().nonnegative().optional()
  ),
  rating: z.preprocess(
    (v) => (typeof v === "string" ? parseFloat(v) : v),
    z.number().min(0).max(5).optional()
  ),
  inStock: z.preprocess(
    (v) => (v === "true" ? true : v === "false" ? false : v),
    z.boolean().optional()
  ),
  page: z.preprocess(
    (v) => (typeof v === "string" ? parseInt(v, 10) : v),
    z.number().int().positive().default(1)
  ),
  limit: z.preprocess(
    (v) => (typeof v === "string" ? parseInt(v, 10) : v),
    z.number().int().positive().max(50).default(20)
  ),
  sort: z.string().optional(),
});

export const searchQuerySchema = z.object({
  q: z.string().optional().default(""),
  limit: z.preprocess(
    (v) => (typeof v === "string" ? parseInt(v, 10) : v),
    z.number().int().positive().max(50).default(20)
  ),
});
