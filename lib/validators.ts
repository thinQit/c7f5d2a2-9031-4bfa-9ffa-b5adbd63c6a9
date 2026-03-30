import { z } from "zod";

export const productsQuerySchema = z.object({
  q: z.string().trim().optional(),
  category: z.string().trim().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  sort: z
    .enum(["best", "newest", "price-asc", "price-desc", "top-rated"])
    .optional()
    .default("best"),
  inStock: z
    .enum(["true", "false"])
    .optional()
    .transform((value) => value === "true"),
  page: z.coerce.number().int().min(1).optional().default(1),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email(),
});

export const checkoutSessionSchema = z.object({
  items: z
    .array(
      z.object({
        slug: z.string().min(1),
        quantity: z.number().int().min(1).max(20),
      }),
    )
    .min(1),
  currency: z.string().length(3).optional().default("usd"),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});
