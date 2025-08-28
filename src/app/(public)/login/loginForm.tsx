'use client';

import { LoginFormData } from '@/features/auth/model/auth.schema';
import { useForm, SubmitHandler } from 'react-hook-form';


export type Inputs = {
  email: string;
  password: string;
}

interface LoginFormProps {
  loading: boolean
  error: string | null
  onSubmit: (data: LoginFormData) => void
}

export const Login = ({ loading, error, onSubmit }: LoginFormProps) => {
  const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<Inputs>();
  
  const onFormSubmit: SubmitHandler<Inputs> = (data) => onSubmit(data);

  return (
    <div className="flex flex-col gap-2 w-3/4 m-auto">
      {loading && (
        <p className="bg-red-100 text-red-600 text-center p-2">{loading}</p>
      )}
      {error && (
        <p className="bg-red-100 text-red-600 text-center p-2">{error}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input type="email" {...register('email', { required: true })} className="border-2" />
        <input type="password" {...register('password', { required: true })} className="border-2" />
        <button type="submit" className="bg-slate-300">
          Login
        </button>
      </form>
    </div>
  );
};
