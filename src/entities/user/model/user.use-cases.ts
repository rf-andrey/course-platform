import { CreateUserPayload, UpdateUserPayload } from './user.schema';
import { UserRepository } from './user.repository';

export function createCreateUserUseCase(userRepo: UserRepository) {
  return async function createUserUseCase(input: CreateUserPayload) {
    const existingUser = await userRepo.findUserByEmail(input.email);

    if (existingUser) {
      throw new Error(); // existing email
    }

    const user = await userRepo.createUser(input);

    return user;
  };
}

export function createFindUserByIdUseCase(userRepo: UserRepository) {
  return async function findUserByIdUseCase(id: number) {
    return userRepo.findUserById(id);
  };
}

export function createFindUserByEmailUseCase(userRepo: UserRepository) {
  return async function findUserByEmailUseCase(email: string) {
    return userRepo.findUserByEmail(email);
  };
}

export function createFindAllUsersUseCase(userRepo: UserRepository) {
  return async function findAllUsersUseCase() {
    return userRepo.findAllUsers();
  };
}

export function createUpdateUserUseCase(userRepo: UserRepository) {
  return async function updateUserUseCase(id: number, input: UpdateUserPayload) {
    const existingUser = await userRepo.findUserById(id);

    if (!existingUser) {
      throw new Error(); // Update Error
    }

    const user = await userRepo.updateUser(id, input);

    return user;
  };
}

export function createDeleteUserUseCase(userRepo: UserRepository) {
  return async function deleteUserUseCase(id: number) {
    const existingUser = await userRepo.findUserById(id);

    if (!existingUser) {
      throw new Error(); // Delete Error
    }

    const user = await userRepo.deleteUser(id);

    return user;
  };
}
