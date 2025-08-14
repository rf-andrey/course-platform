import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { checkSession } from '@/features/auth/model/session';
import { ROUTES } from '@/shared/config/routes';

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const isAuthenticated = await checkSession();

  if (!isAuthenticated) {
    redirect(ROUTES.login);
  }

  return <>{children}</>;
}
