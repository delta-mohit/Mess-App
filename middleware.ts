import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import getCookie from "@/custom-functions/isCookieFound"
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicURL = path==='/login' || path==='/signup';
  let check =  await getCookie();
  if(!isPublicURL && !check){
    console.log("user is not authenticated");
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(isPublicURL && check){
    console.log("user is authenticated, let them go");
    return NextResponse.redirect(new URL('/today-menu', request.url));
  }
  //console.log(path);
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}