import bcrypt from 'bcrypt';

import type { UserRepository } from '@/entities/user/model/user.repository';

type AuthUser = {
  id: number;
  email: string;
  name: string;
}

export function createSignInUseCase(userRepo: UserRepository) {
  return async function signInUseCase(email: string, password: string): Promise<AuthUser> {
    const user = await userRepo.findUserByEmail(email);

    if (!user) {
      await bcrypt.compare(password, "$2b$10$invalidsaltinvalidsaltinv");
      throw new Error('Invalid email or password'); // Login Error
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error('Invalid email or password'); // Login Error
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
