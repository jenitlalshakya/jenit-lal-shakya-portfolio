import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_IS_MAINTENANCE === "true";

  if (request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next();
  }

  if (isMaintenanceMode) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
