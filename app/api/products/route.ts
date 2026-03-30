import { NextRequest, NextResponse } from "next/server";
import { productsQuerySchema } from "@/lib/validators";

type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badge: string;
  inStock: boolean;
};

const PRODUCTS: Product[] = [
  { slug: "everyday-tote", name: "Everyday Tote (18L)", category: "Travel", price: 48, compareAtPrice: 60, rating: 4.8, reviewCount: 1264, badge: "Best Seller", inStock: true },
  { slug: "gan-charger-65w", name: "65W GaN Fast Charger", category: "Tech & Accessories", price: 39, compareAtPrice: 49, rating: 4.7, reviewCount: 892, badge: "Fast Shipping", inStock: true },
  { slug: "glass-meal-prep-set", name: "Glass Meal Prep Set (10 pcs)", category: "Home & Kitchen", price: 54, compareAtPrice: 69, rating: 4.9, reviewCount: 641, badge: "Top Rated", inStock: true },
  { slug: "packing-cubes-6", name: "Compression Packing Cubes (6-pack)", category: "Travel", price: 32, compareAtPrice: 40, rating: 4.6, reviewCount: 1103, badge: "Travel Pick", inStock: true },
  { slug: "magsafe-desk-stand", name: "MagSafe Desk Stand", category: "Tech & Accessories", price: 29, compareAtPrice: 35, rating: 4.5, reviewCount: 507, badge: "Desk Setup", inStock: true },
  { slug: "mini-massage-gun", name: "Mini Massage Gun", category: "Wellness", price: 79, compareAtPrice: 99, rating: 4.7, reviewCount: 388, badge: "Wellness", inStock: false },
];

export async function GET(request: NextRequest) {
  try {
    const params = Object.fromEntries(request.nextUrl.searchParams.entries());
    const parsed = productsQuerySchema.safeParse(params);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { q, category, minPrice, maxPrice, sort, inStock, page } = parsed.data;
    const pageSize = 24;

    let filtered = PRODUCTS.filter((product) => {
      if (q && !product.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (category && product.category.toLowerCase() !== category.toLowerCase()) return false;
      if (typeof minPrice === "number" && product.price < minPrice) return false;
      if (typeof maxPrice === "number" && product.price > maxPrice) return false;
      if (typeof inStock === "boolean" && product.inStock !== inStock) return false;
      return true;
    });

    filtered = filtered.sort((a, b) => {
      switch (sort) {
        case "newest":
          return 0;
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "top-rated":
          return b.rating - a.rating;
        case "best":
        default:
          return b.reviewCount - a.reviewCount;
      }
    });

    const start = (page - 1) * pageSize;
    const paginated = filtered.slice(start, start + pageSize);

    return NextResponse.json({
      data: paginated,
      pagination: {
        page,
        pageSize,
        total: filtered.length,
        hasMore: start + pageSize < filtered.length,
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
