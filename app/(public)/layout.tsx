import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <SiteHeader />

      <main className="container mx-auto max-w-6xl pt-16">{children}</main>

      <SiteFooter />
    </>
  );
}
