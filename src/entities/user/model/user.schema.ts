import { z } from "zod";

const userCore = {
  email: z.string().email(),
  name: z.string(),
};

const userSchema = z.object({
  ...userCore,
  password: z.string(),
});

const userResponseSchema = z.object({
  ...userCore,
  id: z.number(),
});

const user = z.object({
  ...userCore,
  id: z.number(),
  password: z.string(),
});

export type User = z.infer<typeof user>;
export type UserInput = z.infer<typeof userSchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;
