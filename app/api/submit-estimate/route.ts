import { Resend } from "resend";
import {
  buildSubmissionEmailHtml,
  getContactName,
  type SubmitEstimatePayload,
} from "@/lib/estimate-submission";

// Set RESEND_API_KEY and SHAWN_NOTIFICATION_EMAIL in .env.local before deploying.

function isValidPayload(body: unknown): body is SubmitEstimatePayload {
  if (!body || typeof body !== "object") return false;

  const payload = body as SubmitEstimatePayload;

  if (payload.variant !== "residential" && payload.variant !== "commercial") {
    return false;
  }

  if (!Array.isArray(payload.timeSlotIds) || payload.timeSlotIds.length !== 3) {
    return false;
  }

  if (payload.variant === "residential") {
    return Boolean(payload.residential?.name && payload.residential?.email);
  }

  return Boolean(payload.commercial?.name && payload.commercial?.email);
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    // Set to Shawn's actual notification address in production.
    if (!process.env.SHAWN_NOTIFICATION_EMAIL) {
      console.error("SHAWN_NOTIFICATION_EMAIL is not configured");
      return Response.json(
        { error: "Notification email is not configured." },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    if (!isValidPayload(body)) {
      return Response.json({ error: "Invalid submission payload." }, { status: 400 });
    }

    const contactName = getContactName(body);
    const variantLabel =
      body.variant === "residential" ? "Residential" : "Commercial";

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Gilleland Cleaning Services <contact@sgcleans.com>",
      to: process.env.SHAWN_NOTIFICATION_EMAIL,
      subject: `New ${variantLabel} Estimate Request — ${contactName}`,
      html: buildSubmissionEmailHtml(body),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send notification email." },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("submit-estimate error:", error);
    return Response.json(
      { error: "Something went wrong processing your request." },
      { status: 500 },
    );
  }
}
