import api from '@/shared/api/axios';

export async function deleteUser(id: string) {
  const res = await api.delete(`/users/${id}`);
  return res.data;
}