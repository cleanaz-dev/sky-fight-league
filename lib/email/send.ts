// lib/email/send.ts
import { resend } from "@/lib/resend";
import { ReactElement } from "react";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  react: ReactElement; // Accepts any React template component
  from?: string;
  replyTo?: string | string[];
  userId?: string | null;
  templateSlug?: string | null;
}

export async function sendEmail({
  to,
  subject,
  react,
  from = process.env.EMAIL_FROM,
  replyTo = process.env.EMAIL_REPLY_TO,
}: SendEmailOptions) {
  if (!from) {
    throw new Error(
      "[sendEmail] Missing 'from' address — set EMAIL_FROM in your environment or pass it explicitly."
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      react,
      replyTo,
    });

    if (error) {
      console.error("[resend] Email send error:", error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (err) {
    console.error("[sendEmail] Failed to send email:", err);
    throw err;
  }
}