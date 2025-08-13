import { UserInput, UserResponse, User } from "./user.schema";
import {
  createUser,
  deleteUser,
  findUser,
  findUserByEmail,
  findUsers,
  updateUser,
} from "./user.service";

export interface UserRepository {
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: number): Promise<User | null>;
  findAllUsers(): Promise<UserResponse[]>;
  createUser(input: UserInput): Promise<UserResponse>;
  updateUser(id: number, input: UserInput): Promise<UserResponse>;
  deleteUser(id: number): Promise<UserResponse | null>;
}

export const userRepository: UserRepository = {
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await findUserByEmail(email);
    if (!user || user.name === null) {
      return null;
    }
    const { id, email: userEmail, name, password } = user;
    return { id, email: userEmail, name, password };
  },

  async findUserById(id: number): Promise<User | null> {
    const user = await findUser(id);
    if (!user || user.name === null) {
      return null;
    }
    const { id: userId, email, name, password } = user;
    return { id: userId, email, name: name as string, password };
  },

  async findAllUsers(): Promise<UserResponse[]> {
    const users = await findUsers();
    return users
      .filter((user) => user.name !== null)
      .map(({ id, email, name }) => ({ id, email, name: name as string }));
  },

  async createUser(input: UserInput): Promise<UserResponse> {
    const user = await createUser(input);
    const { id, email, name } = user;
    return { id, email, name: name as string };
  },

  async updateUser(id: number, input: UserInput): Promise<UserResponse> {
    const user = await updateUser({ id, ...input });
    const { id: userId, email, name } = user;
    return { id: userId, email, name: name as string };
  },

  async deleteUser(id: number): Promise<UserResponse | null> {
    const user = await deleteUser(id);
    if (!user || user.name === null) {
      return null;
    }
    const { id: userId, email, name } = user;
    return { id: userId, email, name };
  },
};