'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';

export const LoginButton = () => {
  return <Link href="/login">Sign in</Link>;
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
