import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/main", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/"],
};
