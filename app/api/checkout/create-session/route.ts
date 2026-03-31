import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";
import { checkoutCreateSessionSchema } from "@/lib/validators";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn("Missing STRIPE_SECRET_KEY environment variable.");
}

const stripe = new Stripe(stripeSecretKey || "", {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: Request) {
  try {
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
    }

    const json = await req.json();
    const parsed = checkoutCreateSessionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid checkout payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { cartId, successUrl, cancelUrl } = parsed.data;

    const cart = await db.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ error: "Cart not found or empty" }, { status: 404 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = cart.items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        product_data: {
          name: item.product.name,
          metadata: {
            productId: item.product.id,
            slug: item.product.slug,
          },
        },
        unit_amount: item.unitCents,
      },
    }));

    if (cart.shippingCents > 0) {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: "Shipping",
          },
          unit_amount: cart.shippingCents,
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: cart.email ?? undefined,
      metadata: {
        cartId: cart.id,
      },
    });

    return NextResponse.json({ data: { url: session.url, id: session.id } });
  } catch (error) {
    console.error("POST /api/checkout/create-session error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
