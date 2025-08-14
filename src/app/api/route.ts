import { getSession } from '@/features/auth/model/session';
import { NextResponse } from 'next/server';

// check authentication
export async function GET(request: Request) {
  const session = await getSession();
  console.log('GET API', session);
  return NextResponse.json({ authenticated: !!session });
}
