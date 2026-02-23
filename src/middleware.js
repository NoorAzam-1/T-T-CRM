import { NextResponse } from "next/server";

export default function middleware(request) {
  const token = request.cookies.get("refreshToken")?.value;
  const path = request.nextUrl.pathname;

  if (!token && path === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (path === "/login" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
