import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.topic) return NextResponse.json({ ok: true });
    const { email } = body || {};
    if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });

    // TODO: integrate with email marketing tool (e.g., Mailchimp, ConvertKit)
    console.log("NEWSLETTER_SUB", body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}