import { z } from "zod";

const urlSchema = z.string().url();
const emailSchema = z.string().email();

export const checkoutCreateSessionSchema = z.object({
  cartId: z.string().min(1),
  successUrl: urlSchema,
  cancelUrl: urlSchema,
});

export const checkoutInputSchema = z.object({
  sessionId: z.string().min(1),
  email: emailSchema,
  successUrl: urlSchema,
  cancelUrl: urlSchema,
});

const checkoutItemSchema = z.object({
  productId: z.string().optional(),
  name: z.string().optional(),
  quantity: z.number().int().positive().optional(),
  unitPriceCents: z.number().int().nonnegative().optional(),
});

export const checkoutSessionSchema = z.object({
  items: z.array(checkoutItemSchema).min(1),
  currency: z.string().min(1),
  successUrl: urlSchema,
  cancelUrl: urlSchema,
});

export const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: emailSchema,
  orderNumber: z.string().optional(),
  topic: z.enum(["Order status", "Returns", "Product question", "Bulk order", "Other"]),
  message: z.string().min(1),
});

export const newsletterSubscribeSchema = z.object({
  email: emailSchema,
  sourcePage: z.string().optional(),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(1),
  email: emailSchema,
});
