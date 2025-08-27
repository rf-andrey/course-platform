'use client';

import { RegisterForm, Inputs } from './registerForm';
import { useCreateUser } from '@/features/user/model/useCreateUser';

export default function LoginPage() {
  const { handleCreate, loading, error } = useCreateUser();

  const onSubmit = async (data: Inputs) => {
    handleCreate(data);
  };

  return (
    <div>
      <h2 className="p-2 text-center text-slate-600">Login Page</h2>
      <div className="flex flex-col gap-2">
        <RegisterForm
          onSubmit={onSubmit}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}
