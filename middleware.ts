import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { ROUTES } from '@/shared/config/routes';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const publicPaths = ['/login', '/register', '/api/public', '/public/:path*'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  if (!isPublicPath) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      const loginUrl = new URL(ROUTES.login, req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
