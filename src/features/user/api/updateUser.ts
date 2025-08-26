import api from '@/shared/api/axios';

export type UpdateUserPayload = {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  refreshToken?: string | null;
};

export async function updateUser(data: UpdateUserPayload) {
  const res = await api.put(`/users/${data.id}`, data);
  return res.data;
}
