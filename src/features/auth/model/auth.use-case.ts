import type { UserRepository } from '@/entities/user/model/user.repository';
import { comparePassword, generateRefreshToken } from '../lib/utils';

interface User {
  id: number;
  email: string;
  name: string;
}

type AuthUser = {
  user: User;
  refreshToken: string;
};

export function createSignInUseCase(userRepo: UserRepository) {
  return async function signInUseCase(
    email: string,
    password: string
  ): Promise<AuthUser> {
    const user = await userRepo.findUserByEmail(email);

    if (!user) {
      await comparePassword(password, '$2b$10$invalidsaltinvalidsaltinv');
      throw new Error('Invalid email or password'); // Login Error
    }
    
    const isPasswordCorrect = await comparePassword(password, user.password);

    if (!isPasswordCorrect) throw new Error('Invalid email or password'); // Login Error

    const refreshToken = generateRefreshToken();
    await userRepo.saveRefreshToken(user.id, refreshToken);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      refreshToken
    };
  };
}
