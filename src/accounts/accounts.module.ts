import { Module } from '@nestjs/common'
import { CreateAccountController } from './create-account/create-account.controller'
import { PrismaService } from 'src/database/prisma/prisma.service'
import { CreateAccountService } from './create-account/create-account.service';

@Module({
  controllers: [CreateAccountController],
  providers: [PrismaService, CreateAccountService],
})
export class AccountsModule {}
