"use client";
import { useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { EarlyAccessDrawer } from "@/components/site/early-access-drawer";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const isLocked = true;
  return (
    <>
      <SiteHeader
        isLocked={isLocked}
        onOpenEarlyAccess={() => setEarlyAccessOpen(true)}
      />

      <main className="container mx-auto pt-16">{children}</main>

      <SiteFooter />
      <EarlyAccessDrawer
        open={earlyAccessOpen}
        onOpenChange={setEarlyAccessOpen}
      />
    </>
  );
}
