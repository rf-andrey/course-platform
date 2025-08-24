import { CreateUserPayload, UpdateUserPayload, UserResponsePayload, UserPayload } from './user.schema';
import {
  createUser,
  deleteUser,
  findUser,
  findUserByEmail,
  findUserByRefreshToken,
  findUsers,
  updateUser,
  saveRefreshToken
} from './user.service';

export interface UserRepository {
  findUserByEmail(email: string): Promise<UserPayload | null>;
  findUserById(id: number): Promise<UserPayload | null>;
  findUserByRefreshToken(refreshToken: string): Promise<UserPayload | null>;
  findAllUsers(): Promise<UserResponsePayload[]>;
  createUser(input: CreateUserPayload): Promise<UserResponsePayload>;
  updateUser(id: number, input: UpdateUserPayload): Promise<UserResponsePayload>;
  saveRefreshToken(id: number, refreshToken: string): Promise<UserResponsePayload | null>
  deleteUser(id: number): Promise<UserResponsePayload | null>;
}

export const userRepository: UserRepository = {
  async findUserByEmail(email: string): Promise<UserPayload | null> {
    const user = await findUserByEmail(email);
    if (!user || user.name === null) {
      return null;
    }
    const { id, email: userEmail, name, password } = user;
    return { id, email: userEmail, name, password };
  },

  async findUserById(id: number): Promise<UserPayload | null> {
    const user = await findUser(id);
    if (!user || user.name === null) {
      return null;
    }
    const { id: userId, email, name, password } = user;
    return { id: userId, email, name: name as string, password };
  },

  async findUserByRefreshToken(refreshToken: string): Promise<UserPayload | null> {
    const user = await findUserByRefreshToken(refreshToken);
    if (!user || user.name === null) {
      return null;
    }
    const { id, email, name, password } = user;
    return { id, email, name, password };
  },

  async findAllUsers(): Promise<UserResponsePayload[]> {
    const users = await findUsers();
    return users
      .filter((user) => user.name !== null)
      .map(({ id, email, name }) => ({ id, email, name: name as string }));
  },

  async createUser(input: CreateUserPayload): Promise<UserResponsePayload> {
    const user = await createUser(input);
    const { id, email, name } = user;
    return { id, email, name: name as string };
  },

  async updateUser(id: number, input: UpdateUserPayload): Promise<UserResponsePayload> {
    const user = await updateUser({ id, ...input });
    const { id: userId, email, name } = user;
    return { id: userId, email, name: name as string };
  },

  async saveRefreshToken(id: number, refreshToken): Promise<UserResponsePayload> {
    const user = await saveRefreshToken(id, refreshToken);
    const { id: userId, email, name } = user;
    return { id: userId, email, name: name as string }
  },

  async deleteUser(id: number): Promise<UserResponsePayload | null> {
    const user = await deleteUser(id);
    if (!user || user.name === null) {
      return null;
    }
    const { id: userId, email, name } = user;
    return { id: userId, email, name };
  },
};
