import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { checkoutIntentSchema } from "@/lib/validators";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn("Missing STRIPE_SECRET_KEY environment variable.");
}

const stripe = new Stripe(stripeSecretKey || "", {
  apiVersion: "2025-02-24.acacia",
});

const CART_COOKIE_NAME = "lumencart_session_id";

export async function POST(req: NextRequest) {
  try {
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
    }

    const body = await req.json();
    const parsed = checkoutIntentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid checkout payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const cookieStore = await cookies();
    const sessionId = cookieStore.get(CART_COOKIE_NAME)?.value;

    if (!sessionId) {
      return NextResponse.json({ error: "Cart session not found" }, { status: 400 });
    }

    const cart = await db.cart.findUnique({
      where: { sessionId },
      include: {
        items: { include: { product: true } },
      },
    });

    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const subtotal = cart.items.reduce((sum, item) => sum + item.product.priceCents * item.quantity, 0);
    const shipping = subtotal >= 6000 ? 0 : 595;
    const amount = subtotal + shipping;

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: parsed.data.currency.toLowerCase(),
      automatic_payment_methods: { enabled: true },
      metadata: {
        cartId: cart.id,
        sessionId,
      },
    });

    return NextResponse.json({
      clientSecret: intent.client_secret,
      amount,
      currency: parsed.data.currency.toLowerCase(),
    });
  } catch (error) {
    console.error("POST /api/checkout/create-intent error:", error);
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 });
  }
}
