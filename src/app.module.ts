import { Module } from '@nestjs/common'
import { PrismaService } from './database/prisma/prisma.service'
import { AccountsModule } from './accounts/accounts.module'

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [AccountsModule],
})
export class AppModule {}
