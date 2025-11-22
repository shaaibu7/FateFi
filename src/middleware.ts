// src/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host");

  const mainDomain = "FateFi.fun";
  const appSubdomain = `app.${mainDomain}`;

  // PRODUCTION: Subdomain routing (FateFi.fun vs app.FateFi.fun)
  if (host === appSubdomain) {
    url.pathname = `/app${pathname}`;
    return NextResponse.rewrite(url);
  }

  // DEVELOPMENT: Path-based routing (localhost:3000/app/*)
  // Jika di localhost, path /app/* akan otomatis di-route ke app pages
  // Jadi cukup biarkan Next.js menangani routing naturally

  if (
    host === mainDomain ||
    host === "localhost:3000" ||
    host?.startsWith("localhost")
  ) {
    return NextResponse.next();
  }
}

// Config matcher agar middleware tidak berjalan pada file aset
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
