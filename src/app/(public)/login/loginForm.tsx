'use client';

import { LoginFormData } from '@/features/auth/model/auth.schema';
import { Stack } from '@/shared/ui/layout/Stack';
import { Button } from '@/shared/ui/input/Button';
import { Input } from '@/shared/ui/input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Spinner } from '@/shared/ui/feedback/LoadingSpinner';


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
    } = useForm<Inputs>({ mode: 'onSubmit' });
  
  const onFormSubmit: SubmitHandler<Inputs> = (data) => onSubmit(data);
  return (
    <Stack gap={4} className="w-3/4 m-auto items-center">
      {loading && (
        <Spinner />
      )}
      {!loading && (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4 w-full">
          <Input type="email" {...register('email', { required: true })} />
          <Input type="password" {...register('password', { required: true })} />
          <Button type="submit">
            Login
          </Button>
        </form>
      )}
      {(error || errors.email || errors.password) && (
        <p className="bg-red-100 text-red-600 text-center p-2">
          error:
          {error}
          email:
          {errors.email?.type || 'none'}
          password:
          {errors.password?.type || 'none'}
          root:
          {errors.root?.type || 'none'}
        </p>
      )}
    </Stack>
  );
};
