import NextAuth from 'next-auth';


declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
    } & DefaultSession['user'];
    accessToken?: string;
    refreshToken?: string;
    error?: 'RefreshAccessTokenError';
  }

  interface User {
    id: string;
    email: string;
    name?: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    error?: 'RefreshAccessTokenError';
  }
}
