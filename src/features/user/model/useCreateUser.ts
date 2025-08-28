import { useState } from 'react';
import { createUser, CreateUserPayload } from '../api/createUser';

export function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCreate(data: CreateUserPayload) {
    try {
      setLoading(true);
      setError(null);

      await createUser(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return { handleCreate, loading, error };
}