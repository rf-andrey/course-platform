import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { ROUTES } from '@/shared/config/routes';


const JWT_SECRET = process.env.NEXTAUTH_SECRET!;

const redirectToLogin = (url: string) => NextResponse.redirect(new URL(ROUTES.login, url));

export default async function middleware(req: NextRequest) {
  const publicPaths = ['/login', '/register', '/api/public', '/public/:path*'];

  const { pathname } = req.nextUrl;

  const isPublicPath = 
    pathname === '/'
    || publicPaths.some(path => pathname.startsWith(path));

  if (isPublicPath) return NextResponse.next();

  let token = await getToken({ req, secret: JWT_SECRET });

  if (!token || token.error === 'RefreshAccessTokenError') return redirectToLogin(req.url);

  if (token.accessTokenExpires && Date.now() >= token.accessTokenExpires) {
    return redirectToLogin(req.url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
