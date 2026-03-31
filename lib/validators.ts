import { z } from "zod";

const cartItemSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1),
});

export const createCheckoutSchema = z.object({
  email: z.string().email(),
  items: z.array(cartItemSchema).min(1),
  discountCode: z.string().optional(),
});

export const checkoutSessionSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string().min(1),
      quantity: z.number().int().min(1),
      name: z.string().optional(),
      priceCents: z.number().int().nonnegative().optional(),
    })
  ).min(1),
  currency: z.string().min(1),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(1),
  email: z.string().email(),
});
