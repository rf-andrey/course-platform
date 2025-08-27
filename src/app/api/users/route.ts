import { NextResponse } from 'next/server';
import { createUserUseCase, findAllUsersUseCase } from '@/entities/user/model';

export async function GET(req: Request) {
  try {
    const users = await findAllUsersUseCase();
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const user = await createUserUseCase(data);
    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}