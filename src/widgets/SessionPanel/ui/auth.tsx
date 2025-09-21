'use client';

import { Button } from '@/shared/ui/input/Button';
import { ButtonLink } from '@/shared/ui/input/Link';
import { signOut } from 'next-auth/react';

export const LoginButton = () => {
  return <ButtonLink href="/login">Sign in</ButtonLink>;
};

export const LogoutButton = () => {
  return <Button onClick={() => signOut()} variant="secondary">Sign out</Button>;
};
