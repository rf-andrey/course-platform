import { database } from '@/shared/lib/db';
import { CreateUserPayload, UpdateUserPayload } from './user.schema';

export async function createUser(input: CreateUserPayload) {
  const user = await database.user.create({
    data: input,
  });

  return user;
}

export async function findUserByEmail(email: string) {
  return database.user.findUnique({
    where: { email },
  });
}

export async function findUsers() {
  return database.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
}

export async function findUser(id: number) {
  return database.user.findUnique({
    where: { id },
  });
}

export async function updateUser({
  name,
  email,
  password,
  id,
}: UpdateUserPayload & { id: number }) {
  const user = await database.user.update({
    where: { id },
    data: {
      name,
      email,
      password,
    },
  });

  return user;
}

export async function deleteUser(id: number) {
  const user = await database.user.delete({
    where: { id },
  });

  return user;
}
