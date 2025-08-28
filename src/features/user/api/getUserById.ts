import api from '@/shared/api/axios';

export async function getUserById(id: string) {
  const res = await api.get(`/users/${id}`);
  return res.data;
}