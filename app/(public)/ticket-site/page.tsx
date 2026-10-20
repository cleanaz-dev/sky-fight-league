import type { Metadata } from "next";
import Redirector from "./redirector";

export const dynamic = "force-dynamic";

const SITE = "https://tickets.skyfightleague.ca";
const TITLE = "Tickets | Sky Fight League"; // change me
const DESCRIPTION = "Get your tickets now."; // change me

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: "Sky Fight League", // change me
    images: ["/og-tickets.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-tickets.png"],
  },
};

export default function Page() {
  const target = process.env.TICKETS_TARGET_URL;
  if (!target) throw new Error("TICKETS_TARGET_URL is not set");

  return (
    <>
      <Redirector to={target} />
      <p>
        Redirecting… <a href={target}>Continue to tickets</a>
      </p>
    </>
  );
}