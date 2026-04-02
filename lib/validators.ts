import { z } from "zod";

export const productsQuerySchema = z.object({
  category: z.string().min(1).optional(),
  minPrice: z.coerce.number().nonnegative().optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  inStock: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? undefined : v === "true")),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(12),
  sort: z
    .enum(["featured", "top-rated", "price-asc", "price-desc", "newest"])
    .default("featured"),
});

export const searchQuerySchema = z.object({
  q: z.string().min(1, "Query is required"),
  limit: z.coerce.number().int().min(1).max(20).default(10),
});

export const cartItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().int().min(1).max(99).optional(),
  variantId: z.string().cuid().optional(),
});

export const cartActionSchema = z.object({
  sessionId: z.string().min(8),
  action: z.enum(["add", "update", "remove"]),
  item: cartItemSchema,
});

export const checkoutItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().int().min(1).max(99),
});

export const createCheckoutSchema = z.object({
  cartSessionId: z.string().min(8),
  email: z.string().email(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().email(),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  orderNumber: z.string().max(50).optional(),
  topic: z.enum(["Shipping", "Returns", "Product question", "Order change", "Wholesale"]).optional(),
  message: z.string().min(10).max(5000),
});
