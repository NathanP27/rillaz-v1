import { NextResponse } from "next/server";

const ipCache = new Map<string, { count: number; expiresAt: number }>();

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^(\+?63|0)?9\d{9}$|^(\+\d{1,3}[- ]?)?\d{10,14}$/;

function cleanInput(val: string): string {
  return val.replace(/<[^>]*>?/gm, "").trim();
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const now = Date.now();

    const ipData = ipCache.get(clientIp);
    if (ipData && ipData.expiresAt > now) {
      if (ipData.count >= 3) {
        return NextResponse.json(
          { error: "Submission limit reached for this device/location today. Please contact us directly by phone." },
          { status: 429 }
        );
      }
      ipCache.set(clientIp, { count: ipData.count + 1, expiresAt: ipData.expiresAt });
    } else {
      ipCache.set(clientIp, { count: 1, expiresAt: now + 24 * 60 * 60 * 1000 });
    }

    const body = await request.json();
    const { name, email, phone, inquiryType, message, website_url_hp, form_render_time } = body;

    if (website_url_hp) {
      return NextResponse.json({ success: true });
    }

    if (form_render_time && now - Number(form_render_time) < 1500) {
      return NextResponse.json(
        { error: "Form submitted too quickly. Please try again." },
        { status: 400 }
      );
    }

    const sanitizedName = cleanInput(name || "");
    const sanitizedEmail = cleanInput(email || "");
    const sanitizedPhone = cleanInput(phone || "").replace(/[\s\-\(\)]/g, "");
    const sanitizedInquiry = cleanInput(inquiryType || "Free Trial Pass");
    const sanitizedMessage = cleanInput(message || "");

    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }

    if (!sanitizedEmail || !EMAIL_REGEX.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    if (!sanitizedPhone || !PHONE_REGEX.test(sanitizedPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid mobile phone number (e.g. 0917 123 4567)." },
        { status: 400 }
      );
    }

    const backendUrl = process.env.FASTAPI_BACKEND_URL || "http://api:8000/api/v1";
    try {
      const apiRes = await fetch(`${backendUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          phone: sanitizedPhone,
          inquiryType: sanitizedInquiry,
          message: sanitizedMessage,
        }),
      });
      if (apiRes.ok) {
        const data = await apiRes.json();
        return NextResponse.json({ success: true, submissionId: data.id });
      }
    } catch {
      // Fallback
    }

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_123456789_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Gymrillaz Leads <noreply@gymrillaz.com>",
        to: [process.env.CONTACT_RECEIVER_EMAIL || "leads@gymrillaz.com"],
        subject: `[GYMRILLAZ] New ${sanitizedInquiry} Inquiry from ${sanitizedName}`,
        html: `
          <div style="font-family: Arial, sans-serif; background: #0b0c0e; color: #f8fafc; padding: 32px; border-radius: 12px; max-width: 560px;">
            <h2 style="color: #eab308; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 24px;">New Gym Inquiry - ${sanitizedInquiry}</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Name:</td><td style="padding: 8px 0; font-weight: bold;">${sanitizedName}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Email:</td><td style="padding: 8px 0;">${sanitizedEmail}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Phone:</td><td style="padding: 8px 0;">${sanitizedPhone}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">Inquiry Type:</td><td style="padding: 8px 0;">${sanitizedInquiry}</td></tr>
              <tr><td style="padding: 8px 0; color: #a1a1aa; font-size: 12px; vertical-align: top;">Notes:</td><td style="padding: 8px 0;">${sanitizedMessage || "�"}</td></tr>
            </table>
          </div>
        `,
      });
    }

    if (process.env.NODE_ENV === "development") {
      console.log("New Gymrillaz Inquiry:", {
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        inquiryType: sanitizedInquiry,
        message: sanitizedMessage,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

