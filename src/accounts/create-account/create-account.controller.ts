import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common'

import {
  CreateAccountBodySchema,
  createAccountBodySchema,
} from './dto/create-account-body.dto'
import { CreateAccountService } from './create-account.service'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'

@Controller('accounts')
export class CreateAccountController {
  constructor(private createAccountService: CreateAccountService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Body() body: CreateAccountBodySchema) {
    return this.createAccountService.handle(body)
  }
}
