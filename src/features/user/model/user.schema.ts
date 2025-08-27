import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'Insira um nome válido'),
  email: z.string().email('Insira um email válido'),
  password: z.string().min(1, 'Insira uma senha válida')
});

export type RegisterFormData = z.infer<typeof registerSchema>;
