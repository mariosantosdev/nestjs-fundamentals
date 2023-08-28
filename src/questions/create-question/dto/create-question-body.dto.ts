import { z } from 'zod'

export const createQuestionBodySchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  content: z.string(),
})

export type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>
