import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { CreateQuestionService } from './create-question.service'
import {
  CreateQuestionBodySchema,
  createQuestionBodySchema,
} from './dto/create-question-body.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard'
import { AuthenticatedUser } from 'src/auth/authenticated-user.decorator'
import { UserPayload } from 'src/auth/jwt.strategy'

@Controller('questions')
export class CreateQuestionController {
  constructor(private createQuestionService: CreateQuestionService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  async handle(
    @AuthenticatedUser() user: UserPayload,
    @Body(new ZodValidationPipe(createQuestionBodySchema))
    body: CreateQuestionBodySchema,
  ) {
    const { title, content, slug } = body
    const { sub: userId } = user

    return this.createQuestionService.handle({
      title,
      content,
      slug,
      authorId: userId,
    })
  }
}
