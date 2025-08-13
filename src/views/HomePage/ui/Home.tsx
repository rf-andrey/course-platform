import SessionPanel from "@/widgets/SessionPanel";
import { User } from "./user";

export async function Home() {
  return (
    <main>
      <SessionPanel />
      <h1>Next Boilerplate</h1>
      <h2>Client Call</h2>
      <User />
    </main>
  );
}
