import NextAuth from 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    refreshToken?: string;
  }
}

declare module 'next-auth' {
  interface User {
    id: string;
    refreshToken?: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
    };
    refreshToken?: string;
  }
}
