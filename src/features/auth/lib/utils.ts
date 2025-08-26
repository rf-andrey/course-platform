import { hashSync, compare } from 'bcryptjs';
import { randomBytes } from 'crypto';
import { encode, decode } from 'next-auth/jwt';
import { findUserByIdUseCase } from '@/entities/user/model';

const JWT_SECRET = process.env.NEXTAUTH_SECRET!;
const ACCESS_TOKEN_EXPIRATION = 15 * 60;

export async function hashPassword(password: string) {
  return hashSync(password, 12);
}

export async function comparePassword(password: string, hashed: string) {
  return compare(password, hashed);
}

export function generateRefreshToken() {
  return randomBytes(64).toString('hex');
}

export async function generateAccessToken(userId: number) {
  return await encode({
    token: {
      sub: String(userId),
      accessTokenExpires: Math.floor(Date.now() / 1000) + ACCESS_TOKEN_EXPIRATION,
    },
    secret: JWT_SECRET,
  });
}

export async function verifyAccessToken(token: string) {
  try {
    return await decode({ token, secret: JWT_SECRET });
  } catch {
    return null;
  }
}

export async function refreshTokenIfNeeded(token: any) {
  if (!token.accessTokenExpires || Date.now() < (token.accessTokenExpires || 0)) return token;
  
  if (!token.refreshToken) return token;

  const dbUser = await findUserByIdUseCase(Number(token.sub));

  if (!dbUser || !dbUser.refreshToken) return token;

  const newAccessToken = await generateAccessToken(Number(token.sub));

  return {
    ...token,
    accessToken: newAccessToken,
    accessTokenExpires: Date.now() + 15 * 60 * 1000,
    refreshToken: dbUser.refreshToken,
  };
}
