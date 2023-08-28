import { Injectable, ConflictException } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma/prisma.service'
import { hash } from 'bcryptjs'
import { CreateAccountBodySchema } from './dto/create-account-body.dto'

@Injectable()
export class CreateAccountService {
  constructor(private prismaService: PrismaService) {}

  async handle(data: CreateAccountBodySchema) {
    const { email, name, password } = data

    const userWithSameEmail = await this.prismaService.user.findUnique({
      where: { email },
    })

    if (userWithSameEmail) {
      throw new ConflictException('User with same e-mail already exits')
    }

    const hashedPassword = await hash(password, 8)

    await this.prismaService.user.create({
      data: { name, email, password: hashedPassword },
    })
  }
}
