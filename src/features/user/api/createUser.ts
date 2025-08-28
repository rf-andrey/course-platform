import api from '@/shared/api/axios';

export type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
};

export async function createUser(data: CreateUserPayload) {
  const res = await api.post('/users', data);
  return res.data;
}
