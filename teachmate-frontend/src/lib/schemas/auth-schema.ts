import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(1, { message: "Please tell us your good name!" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(["student", "teacher"]),
});



export type LoginSchema = z.infer<typeof loginSchema>;