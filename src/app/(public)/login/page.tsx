'use client';

import { useState } from 'react';

import { Login } from './loginForm';
import { loginAction } from './actions';
import { LoginFormData } from '@/features/auth/model/auth.schema';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const onSubmit = async (data: LoginFormData) => {
    const error = loginAction(data, setLoading, setError);
  };

  return (
    <div>
      <h2 className="p-2 text-center text-slate-600">Login Page</h2>
      <div className="flex flex-col gap-2">
        <Login
          loading={loading}
          error={error}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
