'use client';

import { RegisterForm } from './registerForm';
import { useCreateUser } from '@/features/user/model/useCreateUser';
import { RegisterFormData } from '@/features/user/model/user.schema';

export default function LoginPage() {
  const { handleCreate, loading, error } = useCreateUser();

  const onSubmit = async (data: RegisterFormData) => {
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
