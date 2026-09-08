import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');
  const isLandingPage = request.nextUrl.pathname === '/';
  if (!isDashboardPage && !isLandingPage) {
    return NextResponse.next();
  }

  // Fast check: if no cookies at all, they definitely aren't authenticated
  const cookieHeader = request.headers.get('cookie');
  const hasCookies = cookieHeader && cookieHeader.length > 0;

  if (!hasCookies) {
    if (isDashboardPage) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (isLandingPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
