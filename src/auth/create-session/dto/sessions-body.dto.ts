import { z } from 'zod'

export const createSessionBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type CreateSessionBodySchema = z.infer<typeof createSessionBodySchema>
