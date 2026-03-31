import { z } from "zod";

export const productsQuerySchema = z.object({
  category: z.string().min(1).optional(),
  collection: z.string().min(1).optional(),
  minPrice: z.coerce.number().int().min(0).optional(),
  maxPrice: z.coerce.number().int().min(0).optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  q: z.string().min(1).optional(),
  inStock: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? undefined : v === "true")),
  sort: z
    .enum(["best", "newest", "price_asc", "price_desc", "rating"])
    .optional()
    .default("best"),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(50).default(12),
});

export const slugParamsSchema = z.object({
  slug: z.string().min(1),
});

export const cartItemInputSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().int().min(1).max(25),
});

export const cartInputSchema = z.object({
  sessionId: z.string().min(8),
  items: z.array(cartItemInputSchema).min(1),
});

export const checkoutInputSchema = z.object({
  sessionId: z.string().min(8),
  email: z.string().email(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const newsletterInputSchema = z.object({
  email: z.string().email(),
  source: z.string().min(1).optional().default("website"),
});
