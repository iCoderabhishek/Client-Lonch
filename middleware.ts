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

  const rawBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "http://localhost:8080";
  const apiUrl = rawBaseUrl.endsWith("/api/v1") ? rawBaseUrl : `${rawBaseUrl}/api/v1`;
  
  try {
    // Verify auth state with backend
    const res = await fetch(`${apiUrl}/auth/me`, {
      headers: {
        cookie: cookieHeader,
      },
    });

    const isAuthenticated = res.ok;

    if (isDashboardPage && !isAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (isLandingPage && isAuthenticated) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  } catch (err) {
    // If backend check fails (e.g. network error), fallback to unauthenticated
    if (isDashboardPage) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
