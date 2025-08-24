export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  refreshToken?: string | null;
  createdAt: Date;
  updatedAt: Date;
}