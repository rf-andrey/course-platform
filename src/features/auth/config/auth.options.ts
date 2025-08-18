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
  secret: process.env.NEXTAUTH_SECRET,
};


