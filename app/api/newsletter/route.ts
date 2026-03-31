import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterInputSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = newsletterInputSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid newsletter payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email, source } = parsed.data;

    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email },
      update: {
        source,
        status: "pending",
      },
      create: {
        email,
        source,
        status: "pending",
      },
    });

    return NextResponse.json(
      {
        success: true,
        subscriberId: subscriber.id,
        message: "Subscription received. Please confirm via email.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/newsletter error:", error);
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 });
  }
}
