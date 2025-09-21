'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { RegisterFormData } from '@/features/user/model/user.schema';
import { Button } from '@/shared/ui/input/Button';
import { Stack } from '@/shared/ui/layout/Stack';
import { Spinner } from '@/shared/ui/feedback/LoadingSpinner';
import { Input } from '@/shared/ui/input/Input';

type Inputs = {
  name: string;
  email: string;
  password: string;
}

interface RegisterFormProps {
  loading: boolean
  error: string | null
  onSubmit: (data: RegisterFormData) => void
}

export const RegisterForm = ({ loading, error, onSubmit }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onFormSubmit: SubmitHandler<RegisterFormData> = (data) => onSubmit(data);

  return (
    <Stack gap={4} className="w-3/4 m-auto items-center">
      {loading && (
        <Spinner />
      )}
      {!loading && (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4 w-full">
          {/* TODO: adicionar labels */}
          <Input type="text" {...register('name', { required: true })} />
          <Input type="email" {...register('email', { required: true })} />
          <Input type="password" {...register('password', { required: true })} />
          <Button type="submit">
            Register
          </Button>
        </form>
      )}
      {(error || errors.email || errors.password) && (
        <p className="bg-red-100 text-red-600 text-center p-2">
          error:
          {error}
          email:
          {errors.email?.type ?? 'none'}
          password:
          {errors.password?.type ?? 'none'}
          root:
          {errors.root?.type ?? 'none'}
        </p>
      )}
    </Stack>
  );
};
