"use server";

import { sendEmail } from "@/lib/email/send";
import EarlyAccessEmail from "../email/templates/early-access-email";

export async function submitEarlyAccess(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  // Validate fields (you can swap this for Zod later)
  if (!name || !email || typeof name !== "string" || typeof email !== "string") {
    return { success: false, error: "Name and email are required." };
  }

  // TODO: Add your DB insertion here (e.g., Supabase) to store the signup

  try {
    await sendEmail({
      to: email,
      subject: "You're on the list — Sky Fight League",
      react: EarlyAccessEmail({ name }),
    });
  } catch (err) {
    console.error("[submitEarlyAccess] Failed to send confirmation email:", err);
    return {
      success: false,
      error: "Something went wrong sending your confirmation. Please try again.",
    };
  }

  console.log("Early Access Registration:", { name, email });

  return {
    success: true,
    message: "You're on the list. Keep an eye on your inbox.",
  };
}