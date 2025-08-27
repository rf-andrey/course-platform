
import { Login } from './loginForm';

export default function LoginPage() {
  return (
    <div>
      <h2 className="p-2 text-center text-slate-600">Login Page</h2>
      <div className="flex flex-col gap-2">
        <Login />
      </div>
    </div>
  );
}
