export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid newsletter payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const signup = await db.newsletterSignup.upsert({
      where: { email: parsed.data.email.toLowerCase() },
      update: { sourcePage: parsed.data.sourcePage },
      create: {
        email: parsed.data.email.toLowerCase(),
        sourcePage: parsed.data.sourcePage,
      },
    });

    return NextResponse.json({ success: true, signupId: signup.id });
  } catch (error) {
    console.error("POST /api/newsletter error:", error);
    return NextResponse.json({ error: "Failed to save newsletter signup" }, { status: 500 });
  }
}
