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
  async findUserByEmail(email) {
    const user = await findUserByEmail(email);
    if (!user || !user.name) return null;

    return {
      ...user,
      name: user.name,
      refreshToken: user.refreshToken || undefined,
    }
  },

  async findUserById(id) {
    const user = await findUser(id);
    if (!user || !user.name) return null;

    return {
      ...user,
      name: user.name,
      refreshToken: user.refreshToken || undefined,
    };
  },

  async findUserByRefreshToken(refreshToken) {
    const user = await findUserByRefreshToken(refreshToken);
    if (!user || !user.name) return null;

    return {
      ...user,
      name: user.name,
      refreshToken: user.refreshToken || undefined,
    };
  },

  async findAllUsers() {
    const users = await findUsers();
    return users
      .filter((user) => user.name)
      .map(({ id, email, name }) => ({ id, email, name: name || '' }));
  },

  async createUser(input) {
    const user = await createUser(input);
    const { id, email, name } = user;
    return { id, email, name: name || '' };
  },

  async updateUser(id, input) {
    const user = await updateUser({ id, ...input });
    const { id: userId, email, name } = user;
    return { id: userId, email, name: name || '' };
  },

  async saveRefreshToken(id, refreshToken) {
    const user = await saveRefreshToken(id, refreshToken);
    const { id: userId, email, name } = user;
    return { id: userId, email, name: name || '' }
  },

  async deleteUser(id) {
    const user = await deleteUser(id);
    if (!user || !user.name) return null;
    const { id: userId, email, name } = user;
    return { id: userId, email, name };
  },
};
