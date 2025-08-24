import bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';

export async function hashPassword(password: string) {
  return bcrypt.hashSync(password, 12);
}

export async function comparePassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}

export function generateRefreshToken() {
  return randomBytes(64).toString('hex');
}