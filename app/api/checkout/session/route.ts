export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { checkoutSessionSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = checkoutSessionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { items, currency, successUrl, cancelUrl } = parsed.data;

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "Stripe is not configured. Missing STRIPE_SECRET_KEY." },
        { status: 500 },
      );
    }

    const mockSessionId = `cs_test_${Date.now()}`;
    const mockCheckoutUrl = `https://checkout.stripe.com/pay/${mockSessionId}`;

    return NextResponse.json(
      {
        success: true,
        sessionId: mockSessionId,
        url: mockCheckoutUrl,
        currency,
        items,
        successUrl,
        cancelUrl,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/checkout/session error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
