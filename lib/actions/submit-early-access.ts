"use server";

import { sendEmail } from "@/lib/email/send";
import { saveContact } from "@/lib/actions/save-contact";
import EarlyAccessEmail from "../email/templates/early-access-email";

export async function submitEarlyAccess(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email || typeof name !== "string" || typeof email !== "string") {
    return { success: false, error: "Name and email are required." };
  }

  const result = await saveContact({ name, email, type: "EARLY_ACCESS" });

  if (!result.success) {
    return { success: false, error: result.error };
  }

  if (result.alreadyExists) {
    return {
      success: true,
      message: "You're already on the list — we'll be in touch soon.",
    };
  }

  try {
    await sendEmail({
      to: email,
      subject: "You're on the list — Sky Fight League",
      react: EarlyAccessEmail({ name }),
    });
  } catch (err) {
    console.error("[submitEarlyAccess] Failed to send confirmation email:", err);
    // Contact is already saved either way — don't fail the signup over an email hiccup.
  }

  return {
    success: true,
    message: "You're on the list. Keep an eye on your inbox.",
  };
}