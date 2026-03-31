import { z } from "zod";

export const productsQuerySchema = z.object({
  search: z.string().trim().min(1).max(120).optional(),
  category: z.string().trim().min(1).max(80).optional(),
  minPrice: z.coerce.number().int().min(0).optional(),
  maxPrice: z.coerce.number().int().min(0).optional(),
  minRating: z.coerce.number().min(0).max(5).optional(),
  inStock: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? undefined : v === "true")),
  sort: z.enum(["best", "new", "price_asc", "price_desc", "top_rated"]).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(24),
});

export const cartBodySchema = z.object({
  action: z.enum(["add", "update", "remove", "clear"]),
  productId: z.string().cuid().optional(),
  quantity: z.number().int().min(1).max(99).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email().max(254),
  sourcePage: z.string().trim().min(1).max(120),
});

export const checkoutIntentSchema = z.object({
  cartId: z.string().cuid().optional(),
  currency: z.string().length(3).default("usd"),
});

export const productSlugParamsSchema = z.object({
  slug: z.string().trim().min(1).max(160),
});
