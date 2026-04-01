import { z } from "zod";

export const productQuerySchema = z.object({
  category: z.string().optional(),
  tag: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(24),
  page: z.coerce.number().int().min(1).default(1),
});

export const productSearchQuerySchema = z.object({
  q: z.string().min(1).max(100),
  category: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export const checkoutItemSchema = z.object({
  productId: z.string().cuid(),
  quantity: z.number().int().min(1).max(20),
});

export const createCheckoutSessionSchema = z.object({
  items: z.array(checkoutItemSchema).min(1),
  fulfillmentType: z.enum(["DELIVERY", "PICKUP"]),
  customerNote: z.string().max(500).optional(),
});

export const createOrderSchema = z.object({
  stripeCheckoutSessionId: z.string().min(1),
});

export const stripeWebhookOrderMetadataSchema = z.object({
  userId: z.string().cuid(),
  fulfillmentType: z.enum(["DELIVERY", "PICKUP"]),
  customerNote: z.string().optional(),
});
