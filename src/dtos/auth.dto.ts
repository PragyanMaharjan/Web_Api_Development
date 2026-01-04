import { z } from "zod"

export const RegisterDTO = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export const LoginDTO = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export type RegisterRequest = z.infer<typeof RegisterDTO>
export type LoginRequest = z.infer<typeof LoginDTO>

export interface AuthResponse {
  success: boolean
  message: string
  data?: {
    token?: string
    user?: {
      id: string
      email: string
      role: string
    }
  }
}
