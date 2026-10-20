import type { Metadata } from "next";

export const dynamic = "force-dynamic";

const SITE = "https://tickets.skyfightleague.ca";
const TITLE = "Tickets | Sky Fight League";
const DESCRIPTION = "Get your tickets now."; // change me
const IMAGE = "/ticket-hero.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: "Sky Fight League",
    locale: "en_CA",
    type: "website",
    images: [{ url: IMAGE, alt: "Sky Fight League" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function Page() {
  const target = process.env.TICKETS_TARGET_URL;
  if (!target) throw new Error("TICKETS_TARGET_URL is not set");

  const script = `window.location.replace(${JSON.stringify(target).replace(/</g, "\\u003c")});`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <a href={target}>Continue to tickets</a>
      </noscript>
    </>
  );
}