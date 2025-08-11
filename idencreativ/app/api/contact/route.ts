import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.topic) return NextResponse.json({ ok: true });
    const { name, email, message } = body || {};
    if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    // TODO: integrate email provider (e.g., Resend, SendGrid)
    console.log("CONTACT_LEAD", body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}