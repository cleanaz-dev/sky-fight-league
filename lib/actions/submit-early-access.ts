"use server";

export async function submitEarlyAccess(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  // Validate fields (you can swap this for Zod later)
  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  // TODO: Add your DB insertion or Email Provider logic here (e.g., Resend, Mailchimp, Supabase)
  
  // Simulate network delay for the slick UI loading state
  await new Promise((resolve) => setTimeout(resolve, 1200));

  console.log("Early Access Registration:", { name, email });

  return { 
    success: true, 
    message: "You're on the list. Keep an eye on your inbox." 
  };
}