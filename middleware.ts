import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getCookie from "@/custom-functions/isCookieFound";
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicURL = path === "/login" || path === "/signup";
  const isverifyPage = path === "/verifyEmail"; //special case
  let check = await getCookie();
  let istempUser = cookies().has("tempToken");
  if (isverifyPage && !istempUser) {
    if (check) {
      // console.log(
      //   "going to today menu because i am logged in but not allowed to go to verifyemail page"
      // );
      return NextResponse.redirect(new URL("/today-menu", request.url));
    } else {
      //console.log("going to login page because i am not looged in and also not allowed to go to verifyemail page");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else if (isverifyPage && istempUser) {
    if (check) {
      return NextResponse.redirect(new URL("/today-menu", request.url));
    } else {
      //console.log("going to 'verify email page' because i am allowed ");
      return NextResponse.next();
    }
  } else {
    if (!isPublicURL && !check) {
      //console.log("user is not authenticated");
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (isPublicURL && check) {
      //console.log("user is authenticated, let them go");
      return NextResponse.redirect(new URL("/today-menu", request.url));
    }
  }
  console.log(path);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
