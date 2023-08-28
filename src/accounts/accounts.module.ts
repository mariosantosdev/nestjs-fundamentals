import { Module } from '@nestjs/common'
import { CreateAccountController } from './create-account/create-account.controller'
import { CreateAccountService } from './create-account/create-account.service'

@Module({
  controllers: [CreateAccountController],
  providers: [CreateAccountService],
})
export class AccountsModule {}
