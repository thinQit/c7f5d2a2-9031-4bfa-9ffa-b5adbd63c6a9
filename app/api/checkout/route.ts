import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { checkoutInputSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = checkoutInputSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid checkout payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { sessionId, email, successUrl, cancelUrl } = parsed.data;

    const cart = await db.cart.findUnique({
      where: { sessionId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ error: "Cart is empty or not found" }, { status: 404 });
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
    }

    return NextResponse.json({
      provider: "stripe",
      mode: "payment",
      sessionId: `mock_${sessionId}`,
      redirectUrl: `${successUrl}?session_id=mock_${sessionId}`,
      cancelUrl,
      customerEmail: email,
      amountCents: cart.totalCents,
      currency: cart.currency.toLowerCase(),
      note: "Replace mock response with Stripe SDK session creation in production.",
    });
  } catch (error) {
    console.error("POST /api/checkout error:", error);
    return NextResponse.json({ error: "Failed to initialize checkout" }, { status: 500 });
  }
}
