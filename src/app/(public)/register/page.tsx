'use client';

import { RegisterForm } from './registerForm';
import { useCreateUser } from '@/features/user/model/useCreateUser';
import { RegisterFormData } from '@/features/user/model/user.schema';
import { FormContainer } from '@/shared/ui/layout/FormContainer';
import { H2 } from '@/shared/ui/typography';

export default function LoginPage() {
  const { handleCreate, loading, error } = useCreateUser();

  const onSubmit = async (data: RegisterFormData) => {
    handleCreate(data);
  };

  return (
    <div>
      <H2 className="text-center">Register Page</H2>
      <FormContainer>
        <RegisterForm
          loading={loading}
          error={error}
          onSubmit={onSubmit}
        />
      </FormContainer>
    </div>
  );
}
