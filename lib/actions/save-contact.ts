// lib/actions/save-contact.ts
"use server";

import type { ContactType, Prisma } from "@/lib/generated/prisma/client";
import { prisma } from "../prisma";

interface SaveContactParams {
  name?: string;
  email: string;
  type: ContactType;
  metadata?: Prisma.InputJsonValue;
}

interface SaveContactResult {
  success: boolean;
  alreadyExists?: boolean;
  error?: string;
}

export async function saveContact({
  name,
  email,
  type,
  metadata,
}: SaveContactParams): Promise<SaveContactResult> {
  if (!email) {
    return { success: false, error: "Email is required." };
  }

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        type,
        metadata,
      },
    });
    return { success: true };
  } catch (err: any) {
    if (err.code === "P2002") {
      return { success: true, alreadyExists: true };
    }
    console.error("[saveContact] DB error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}