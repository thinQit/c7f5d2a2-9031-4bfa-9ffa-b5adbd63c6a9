import { z } from "zod";

export const checkoutCreateSessionSchema = z.object({
  cartId: z.string().min(1, "Cart ID is required"),
  successUrl: z.string().url("Invalid success URL"),
  cancelUrl: z.string().url("Invalid cancel URL"),
});

export const checkoutSessionSchema = z.object({
  items: z.array(z.any()).min(1, "At least one item is required"),
  currency: z.string().min(1, "Currency is required"),
  successUrl: z.string().url("Invalid success URL"),
  cancelUrl: z.string().url("Invalid cancel URL"),
});

export const contactSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  orderNumber: z.string().optional(),
  topic: z.string().min(1, "Topic is required"),
  message: z.string().min(1, "Message is required"),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().email("Invalid email"),
  sourcePage: z.string().optional(),
});

export const trackOrderSchema = z.object({
  orderNumber: z.string().min(1, "Order number is required"),
  email: z.string().email("Invalid email"),
});
