import { NextResponse } from 'next/server';
import { findUserByIdUseCase, updateUserUseCase, deleteUserUseCase } from '@/entities/user/model';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const user = await findUserByIdUseCase(Number(params.id));
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Error searching for user' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    const user = await updateUserUseCase(Number(params.id), data);
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const user = await deleteUserUseCase(Number(params.id));
    return NextResponse.json(user, { status: 204 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 400 });
  }
}
