import { z } from "zod";

export const productQuerySchema = z.object({
  q: z.string().trim().min(1).max(100).optional(),
  category: z.string().trim().min(1).max(60).optional(),
  minPrice: z.coerce.number().int().min(0).optional(),
  maxPrice: z.coerce.number().int().min(0).optional(),
  minRating: z.coerce.number().min(0).max(5).optional(),
  inStock: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? undefined : v === "true")),
  sort: z
    .enum(["featured", "price-asc", "price-desc", "rating-desc", "newest"])
    .default("featured"),
  take: z.coerce.number().int().min(1).max(100).default(24),
  skip: z.coerce.number().int().min(0).default(0),
});

export const newsletterSchema = z.object({
  email: z.string().email().max(255),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(255),
  topic: z.string().min(2).max(80),
  orderNumber: z.string().max(50).optional(),
  message: z.string().min(10).max(3000),
});

export const cartItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().int().min(1).max(20),
});

export const createCheckoutSchema = z.object({
  email: z.string().email().max(255),
  items: z.array(cartItemSchema).min(1).max(50),
  discountCode: z.string().max(40).optional(),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(3).max(50),
  email: z.string().email().max(255),
});
