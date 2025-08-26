import { hashSync, compare } from 'bcryptjs';
import { randomBytes } from 'crypto';
import { encode, decode } from 'next-auth/jwt';
import { findUserByIdUseCase } from '@/entities/user/model';

const JWT_SECRET = process.env.NEXTAUTH_SECRET!;
const ACCESS_TOKEN_EXPIRATION = 2 * 60;

export async function hashPassword(password: string) {
  return hashSync(password, 12);
}

export async function comparePassword(password: string, hashed: string) {
  return compare(password, hashed);
}

export function generateRefreshToken() {
  return randomBytes(64).toString('hex');
}
