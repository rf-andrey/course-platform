'use client';

import { useState } from 'react';

import { Login } from './loginForm';
import { loginAction } from './actions';
import { LoginFormData } from '@/features/auth/model/auth.schema';
import { H2 } from '@/shared/ui/typography';
import { Section } from '@/shared/ui/layout/Section';
import { FormContainer } from '@/shared/ui/layout/FormContainer';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const onSubmit = async (data: LoginFormData) => {
    loginAction(data, setLoading, setError);
  };

  return (
    <Section>
    <FormContainer>
      <H2 className='text-center'>Login Page</H2>
      <Login
        loading={loading}
        error={error}
        onSubmit={onSubmit}
      />
    </FormContainer>
    </Section>
  );
}
