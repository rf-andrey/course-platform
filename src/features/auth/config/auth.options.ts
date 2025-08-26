import { type NextAuthOptions } from 'next-auth';
import { providers } from './auth.providers';
import { sessionCallback, jwtCallback } from './auth.callbacks';
import { ROUTES } from '@/shared/config/routes';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers,
  pages: { signIn: ROUTES.login },
  callbacks: {
    session: sessionCallback,
    jwt: jwtCallback,
  },
  jwt: { secret: process.env.NEXTAUTH_SECRET },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production'
        ? '__Secure-next-auth.session-token'
        : 'next-auth.session-token',
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      },
    },
  },
};


