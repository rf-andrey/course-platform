import NextAuth from 'next-auth';

import { authOptions } from '@/features/auth/config/auth.options';

const handler = NextAuth(authOptions);

if (!process.env.NEXTAUTH_URL && process.env.VERCEL_URL) {
  process.env.NEXTAUTH_URL = `https://${process.env.VERCEL_URL}`
}

export { handler as GET, handler as POST };
