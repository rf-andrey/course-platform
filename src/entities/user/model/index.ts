import { userRepository } from './user.repository';
import {
  createCreateUserUseCase,
  createFindUserByIdUseCase,
  createFindUserByEmailUseCase,
  createFindAllUsersUseCase,
  createUpdateUserUseCase,
  createDeleteUserUseCase,
} from './user.use-cases';

export const createUserUseCase = createCreateUserUseCase(userRepository);
export const findUserByIdUseCase = createFindUserByIdUseCase(userRepository);
export const findUserByEmailUseCase = createFindUserByEmailUseCase(userRepository);
export const findAllUsersUseCase = createFindAllUsersUseCase(userRepository);
export const updateUserUseCase = createUpdateUserUseCase(userRepository);
export const deleteUserUseCase = createDeleteUserUseCase(userRepository);