import { z } from "zod";

export const checkoutCreateSessionSchema = z.object({
  cartId: z.string().min(1),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const checkoutInputSchema = z.object({
  sessionId: z.string().min(1),
  email: z.string().email(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const checkoutSessionSchema = z.object({
  items: z.array(z.any()),
  currency: z.string().min(1),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  orderNumber: z.union([z.string().min(1), z.literal("")]).optional(),
  topic: z.enum(["Order status", "Returns", "Product question", "Bulk order", "Other"]),
  message: z.string().min(1),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().email(),
  sourcePage: z.union([z.string().min(1), z.literal("")]).optional(),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(1),
  email: z.string().email(),
});
