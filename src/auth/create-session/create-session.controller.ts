import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import {
  CreateSessionBodySchema,
  createSessionBodySchema,
} from './dto/sessions-body.dto'
import { CreateSessionService } from './create-session.service'

@Controller('sessions')
export class CreateSessionController {
  constructor(private createSessionService: CreateSessionService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createSessionBodySchema))
  async handle(@Body() body: CreateSessionBodySchema) {
    return this.createSessionService.handle(body)
  }
}
