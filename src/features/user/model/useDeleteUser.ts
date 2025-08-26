import { useState } from 'react';
import { deleteUser } from '../api/deleteUser';

export function useDeleteUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete(id: string) {
    try {
      setLoading(true);
      setError(null);

      await deleteUser(id);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { handleDelete, loading, error };
}