import {
  createUser,
  deleteUser,
  findUser,
  findUserByEmail,
  findUsers,
  updateUser,
} from "./user.service";
import { UserInput } from "./user.schema";
import { UserRepository } from "./user.repository";

export function createCreateUserUseCase(
  userRepo: UserRepository
) {
  return async function createUserUseCase(
    email: string,
    password: string,
    name: string
  ) {
    const existingUser = await userRepo.findUserByEmail(email);

    if (existingUser) {
      throw new Error(); // existing email
    }

    const user = await userRepo.createUser({ email, password, name });

    return user;
  };
}

export function createFindUserByIdUseCase(
  userRepo: UserRepository
) {
  return async function findUserByIdUseCase(id: number) {
    return userRepo.findUserById(id);
  };
}

export function createFindUserByEmailUseCase(
  userRepo: UserRepository
) {
  return async function findUserByEmailUseCase(email: string) {
    return userRepo.findUserByEmail(email);
  };
}

export function createFindAllUsersUseCase(
  userRepo: UserRepository
) {
  return async function findAllUsersUseCase() {
    return userRepo.findAllUsers();
  };
}

export function createUpdateUserUseCase(
  userRepo: UserRepository
) {
  return async function updateUserUseCase(id: number, input: UserInput) {
    const existingUser = await userRepo.findUserById(id);

    if (!existingUser) {
      throw new Error(); // Update Error
    }

    const user = await userRepo.updateUser(id, input);

    return user;
  };
}

export function createDeleteUserUseCase(
  userRepo: UserRepository
) {
  return async function deleteUserUseCase(id: number) {
    const existingUser = await userRepo.findUserById(id);

    if (!existingUser) {
      throw new Error(); // Delete Error
    }

    const user = await userRepo.deleteUser(id);

    return user;
  };
}