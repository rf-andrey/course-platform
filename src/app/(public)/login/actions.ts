import { LoginFormData } from '@/features/auth/model/auth.schema';
import { signIn } from 'next-auth/react';

export const loginAction = async (
  formData: LoginFormData,
  setLoading: React.Dispatch<boolean>,
  setError: React.Dispatch<string>
) => {
  const credentials = {
    email: formData.email,
    password: formData.password,
  };

  try {
    setLoading(true);
    await signIn('credentials', { ...credentials, callbackUrl: '/dashboard' });
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError(String(error));
    }
  } finally {
    setLoading(false);
  }
};
