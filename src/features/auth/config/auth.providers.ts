import CredentialsProvider from 'next-auth/providers/credentials';
import { createSignInUseCase } from '../model/auth.use-case';
import { userRepository } from '@/entities/user/model/user.repository';

const signInUseCase = createSignInUseCase(userRepository);

export const credentialsProvider = CredentialsProvider({
  name: 'Sign in',
  credentials: {
    email: { label: 'Email', type: 'email', placeholder: 'hello@example.com' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials) {
    console.log("🔑 authorize called with:", credentials);
    if (!credentials?.email || !credentials?.password) return null;
    try {
      const user = await signInUseCase(credentials.email, credentials.password);
      console.log("✅ user authenticated:", user.email);
      return { id: String(user.id), email: user.email, name: user.name };
    } catch (err) {
      console.error("❌ auth failed:", err);
      return null;
    }
  },
});

export const providers = [credentialsProvider];
