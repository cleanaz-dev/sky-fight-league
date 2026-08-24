"use server";

export async function submitOpportunity(formData: FormData) {
  const type = formData.get("type"); // 'sponsor' or 'media'
  const name = formData.get("name");
  const entity = formData.get("entity"); // Company or Outlet name
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !entity) {
    return { success: false, error: "Missing required fields." };
  }

  // TODO: Add your DB insertion or Email Provider logic here
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  console.log(`New ${type} Inquiry:`, { name, entity, email, message });

  return { 
    success: true, 
    message: "Request received. Our team will be in touch shortly." 
  };
}