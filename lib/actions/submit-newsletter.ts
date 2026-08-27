// lib/actions/submit-newsletter.ts
"use server";

import { saveContact } from "@/lib/actions/save-contact";
import { sendEmail } from "@/lib/email/send";
import NewsletterConfirmationEmail from "../email/templates/newsletter-email";

export async function submitNewsletter(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { success: false, error: "Email is required." };
  }

  const cleanName = typeof name === "string" && name.trim() ? name.trim() : undefined;

  const result = await saveContact({ name: cleanName, email, type: "NEWSLETTER" });

  if (!result.success) {
    return { success: false, error: result.error };
  }

  if (result.alreadyExists) {
    return { success: true, message: "You're already subscribed." };
  }

  try {
    await sendEmail({
      to: email,
      subject: "You're subscribed — Sky Fight League",
      react: NewsletterConfirmationEmail({ name: cleanName ?? "there" }),
    });
  } catch (err) {
    console.error("[submitNewsletter] Failed to send confirmation email:", err);
    // Contact is already saved — don't fail the signup over an email hiccup.
  }

  return { success: true, message: "You're in the corner. Watch your inbox." };
}