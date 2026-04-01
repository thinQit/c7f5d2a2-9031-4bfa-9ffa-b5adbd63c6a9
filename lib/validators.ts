import { z } from "zod";

export const cartBodySchema = z.object({
  action: z.enum(["add", "update", "remove", "clear"]),
  productId: z.string().min(1).optional(),
  quantity: z.number().int().positive().optional(),
});

export const checkoutIntentSchema = z.object({
  currency: z.string().min(1),
});

export const checkoutInputSchema = z.object({
  sessionId: z.string().min(1),
  email: z.string().email(),
  successUrl: z.string().min(1),
  cancelUrl: z.string().min(1),
});

export const checkoutSessionSchema = z.object({
  items: z.array(z.any()),
  currency: z.string().min(1),
  successUrl: z.string().min(1),
  cancelUrl: z.string().min(1),
});

export const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  orderNumber: z.string().min(1).optional(),
  topic: z.string().min(1),
  message: z.string().min(1),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  sourcePage: z.string().min(1).optional(),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().email(),
  sourcePage: z.string().min(1).optional(),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(1),
  email: z.string().email(),
});

export const productSlugParamsSchema = z.object({
  slug: z.string().min(1),
});
