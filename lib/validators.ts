import { z } from "zod";

export const checkoutSessionSchema = z.object({
  items: z.array(z.any()).min(1, "At least one item is required"),
  currency: z.string().min(1, "Currency is required"),
  successUrl: z.string().url("Success URL must be a valid URL"),
  cancelUrl: z.string().url("Cancel URL must be a valid URL"),
});
