import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { FetchQuestionsService } from './fetch-questions.service'
import { AuthenticatedUser } from 'src/auth/authenticated-user.decorator'
import { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { z } from 'zod'
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard'

const pageQueryParamSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamSchema)

type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>

@Controller('questions')
export class FetchQuestionsController {
  constructor(private fetchQuestionsService: FetchQuestionsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async handle(
    @AuthenticatedUser() user: UserPayload,
    @Query('page', queryValidationPipe) page: PageQueryParamSchema,
  ) {
    const { sub: userId } = user

    return this.fetchQuestionsService.handle({ authorId: userId, page })
  }
}
