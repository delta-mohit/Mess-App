import { NextRequest, NextResponse } from "next/server";
import { UNAUTHORISED_RESPONSE } from "./app/constants";
import getCookie from "@/custom-functions/isCookieFound";
import { cookies } from "next/headers";

const allowedApiPaths = ["/api/user/login", "/api/user/register"];

const publicPaths = ["/login", "/signup"];
const verifyEmailPage = "/verifyEmail";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.headers.get("Authorization");
  const isApiRoute = path.startsWith("/api/");
  const isPublicPage = publicPaths.includes(path);
  const isVerifyPage = path === verifyEmailPage;
  const isAuthenticated = await getCookie(); // Check user auth state
  const isTempUser = cookies().has("tempToken");

  // Backend: API Authentication Middleware
  if (isApiRoute) {
    if (allowedApiPaths.includes(path)) {
      return NextResponse.next();
    }
    if (!token) {
      console.log("No token found: from middleware");
      return UNAUTHORISED_RESPONSE;
    }
    return NextResponse.next();
  }

  // Frontend: User Authentication Middleware
  if (isVerifyPage) {
    if (isTempUser) {
      return isAuthenticated
        ? NextResponse.redirect(new URL("/today-menu", req.url))
        : NextResponse.next();
    }
    return isAuthenticated
      ? NextResponse.redirect(new URL("/today-menu", req.url))
      : NextResponse.redirect(new URL("/login", req.url));
  }

  if (!isPublicPage && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (isPublicPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/today-menu", req.url));
  }

  return NextResponse.next();
}

// 🔹 Define middleware matching paths
export const config = {
  matcher: [
    "/api/:path*", // Apply to all API routes
    "/((?!_next/static|_next/image|favicon.ico).*)", // Apply to all frontend pages except static assets
  ],
};
