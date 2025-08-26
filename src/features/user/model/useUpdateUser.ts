import { useState } from 'react';
import { updateUser, UpdateUserPayload } from '../api/updateUser';

export function useUpdateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleUpdate(data: UpdateUserPayload) {
    try {
      setLoading(true);
      setError(null);

      await updateUser(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { handleUpdate, loading, error };
}