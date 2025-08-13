import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { createSignInUseCase } from "@/features/auth/model/auth.use-case";
import { userRepository } from "@/entities/user/model/user.repository";
import { ROUTES } from "@/shared/config/routes";

const signInUseCase = createSignInUseCase(userRepository);

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          const user = await signInUseCase(
            credentials.email,
            credentials.password
          );

          return {
            id: user.id + "",
            email: user.email,
            name: user.name,
          };
        } catch (e) {
          // Optionally log error here
          return null;
        }
      }
    }),
  ],
  pages: {
    signIn: ROUTES.login,
  },
  callbacks: {
    session: ({ session, token }) => {
      session.user = token.user as any;
      return session;
    },
    jwt: ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
