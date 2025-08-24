import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { findUserByRefreshTokenUseCase, saveRefreshTokenUseCase } from '@/entities/user/model';
import { generateRefreshToken } from '@/features/auth/lib/utils';

export async function POST(req: Request) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!refreshToken) return NextResponse.json({ message: 'No refresh token' }, { status: 401 });

  const user = await findUserByRefreshTokenUseCase(refreshToken);

  if (!user) return NextResponse.json({ message: 'Invalid refresh token' }, { status: 401 });

  const newRefreshToken = generateRefreshToken();
  await saveRefreshTokenUseCase(user.id, newRefreshToken);

  const res = NextResponse.json({ message: 'Token refreshed' });
  res.cookies.set('refreshToken', newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}