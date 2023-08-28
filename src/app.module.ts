import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './database/prisma/prisma.service'
import { AccountsModule } from './accounts/accounts.module'
import { envSchema } from './env'

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [
    AccountsModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
