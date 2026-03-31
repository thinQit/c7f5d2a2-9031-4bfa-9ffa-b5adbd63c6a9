import { z } from "zod";

export const productListQuerySchema = z.object({
  category: z.string().trim().min(1).optional(),
  minPrice: z.coerce.number().int().min(0).optional(),
  maxPrice: z.coerce.number().int().min(0).optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  inStock: z
    .union([z.literal("true"), z.literal("false"), z.boolean()])
    .optional()
    .transform((v) => (typeof v === "string" ? v === "true" : v)),
  q: z.string().trim().min(1).optional(),
  sort: z.enum(["best", "rating", "price_asc", "price_desc", "new"]).optional(),
  tag: z.string().trim().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(24),
  cursor: z.string().optional(),
});

export const cartItemInputSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().int().min(1).max(99),
});

export const cartUpsertSchema = z.object({
  cartId: z.string().cuid().optional(),
  email: z.string().email().optional(),
  items: z.array(cartItemInputSchema).min(1),
});

export const checkoutCreateSessionSchema = z.object({
  cartId: z.string().cuid(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().email(),
  sourcePage: z.string().trim().min(1).max(200),
});

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().email(),
  orderNumber: z
    .string()
    .trim()
    .regex(/^SS-\d{4,}$/, "Order number must look like SS-10482")
    .optional()
    .or(z.literal("")),
  topic: z.enum(["Order status", "Returns", "Product question", "Bulk order", "Other"]),
  message: z.string().trim().min(10).max(5000),
});
