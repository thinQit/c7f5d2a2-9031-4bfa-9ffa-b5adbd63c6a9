import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { email } = parsed.data;

    await db.newsletterSubscriber.upsert({
      where: { email },
      create: { email },
      update: {},
    });

    return NextResponse.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/newsletter error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
