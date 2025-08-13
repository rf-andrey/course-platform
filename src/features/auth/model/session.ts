import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function checkSession() {
  const session = await getServerSession(authOptions);
  return !!session;
};

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
};