import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AccountsModule } from './accounts/accounts.module'
import { envSchema } from './env'
import { PrismaModule } from './database/prisma/prisma.module'

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    AccountsModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    PrismaModule,
  ],
})
export class AppModule {}
