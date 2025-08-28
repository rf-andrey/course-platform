import { getSession } from '@/features/auth/model/session';
import { LoginButton, LogoutButton } from './ui/auth';
import { RegisterButton } from './ui/RegisterButton';

export default async function SessionPanel() {
  const session = await getSession();

  return (
    <section>
      {session ? (
        <>
          <LogoutButton />
          <h2>Welcome, {session.user?.name || session.user?.email}</h2>
        </>
      ) : (
        <>
          <LoginButton />
          <h2>Please sign in</h2>
          <br />
          <RegisterButton />
        </>
      )}
      <h3>Session Data</h3>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
