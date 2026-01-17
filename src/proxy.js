import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const cookies = request.cookies;
  const isMockAuth = cookies.get("auth")?.value === "true";

  const hasNextAuthSession =
    cookies.get("next-auth.session-token") ||
    cookies.get("__Secure-next-auth.session-token");

  if (!isMockAuth && !hasNextAuthSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/add-item/:path*",
};
