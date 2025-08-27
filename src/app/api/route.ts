import { getSession } from '@/features/auth/model/session';
import { NextResponse } from 'next/server';

// check authentication
export async function GET(request: Request) {
  const session = await getSession();
  return NextResponse.json({ authenticated: !!session });
}
