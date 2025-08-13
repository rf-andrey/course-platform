import { getSession } from "@/features/auth/model/session";
import { HomePage } from "@/views/HomePage";

export default async function Home() {
  const session = await getSession();

  return (
    <main>
      <HomePage />
    </main>
  );
}
