import { NextRequest, NextResponse } from "next/server";

const TICKETS_HOSTS = new Set(["tickets.domain.com", "tickets.localhost"]);

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];

  if (TICKETS_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.pathname = "/tickets-site";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};