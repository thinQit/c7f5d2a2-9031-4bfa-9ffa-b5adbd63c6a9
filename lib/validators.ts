import { z } from "zod";

const numberFromString = z.preprocess((value) => {
  if (value === undefined || value === null || value === "") return undefined;
  const num = typeof value === "string" ? Number(value) : value;
  return Number.isNaN(num) ? value : num;
}, z.number());

const positiveIntFromString = z.preprocess((value) => {
  if (value === undefined || value === null || value === "") return undefined;
  const num = typeof value === "string" ? Number(value) : value;
  return Number.isNaN(num) ? value : num;
}, z.number().int().positive());

const booleanFromString = z.preprocess((value) => {
  if (value === "true") return true;
  if (value === "false") return false;
  return value;
}, z.boolean());

export const cartBodySchema = z.object({
  action: z.enum(["add", "update", "remove", "clear"]),
  productId: z.string().optional(),
  quantity: positiveIntFromString.optional(),
});

export const checkoutIntentSchema = z.object({
  currency: z.string().min(3),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  sourcePage: z.string().optional(),
});

export const productSlugParamsSchema = z.object({
  slug: z.string().min(1),
});

export const productsQuerySchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  minPrice: numberFromString.optional(),
  maxPrice: numberFromString.optional(),
  minRating: numberFromString.optional(),
  inStock: booleanFromString.optional(),
  sort: z.enum(["best", "new", "price_asc", "price_desc", "top_rated"]).optional(),
  page: positiveIntFromString.default(1),
  limit: positiveIntFromString.default(12),
});
