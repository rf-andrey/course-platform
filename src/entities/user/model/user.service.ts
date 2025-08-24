import { database } from '@/shared/lib/db';
import { CreateUserPayload, UpdateUserPayload } from './user.schema';
import { hashPassword } from '@/features/auth/lib/utils';

export async function createUser(input: CreateUserPayload) {
  const hashedPassword = await hashPassword(input.password);
  const user = await database.user.create({
    data: {
      email: input.email,
      name: input.name,
      password: hashedPassword,
    }
  });

  return user;
}

export async function findUserByEmail(email: string) {
  return database.user.findUnique({
    where: { email },
  });
}

export async function findUserByRefreshToken(refreshToken: string) {
  return database.user.findFirst({ where: { refreshToken } });
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

export async function saveRefreshToken(id: number, refreshToken: string) {
  return database.user.update({
    where: { id },
    data: { refreshToken },
  })
}

export async function deleteUser(id: number) {
  const user = await database.user.delete({
    where: { id },
  });

  return user;
}
