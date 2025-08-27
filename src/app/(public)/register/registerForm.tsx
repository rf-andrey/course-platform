'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

export type Inputs = {
  name: string;
  email: string;
  password: string;
}

interface RegisterFormProps {
  loading: boolean
  error: string | null
  onSubmit: (data: Inputs) => void
}

export const RegisterForm = ({ loading, error, onSubmit }: RegisterFormProps) => {
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
      <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
        <input type="text" {...register('name', { required: true })} className="border-2" />
        <input type="email" {...register('email', { required: true })} className="border-2" />
        <input type="password" {...register('password', { required: true })} className="border-2" />
        <button type="submit" className="bg-slate-300">
          Register
        </button>
      </form>
    </div>
  );
};
