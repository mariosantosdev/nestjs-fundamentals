import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcryptjs'
import { PrismaService } from 'src/database/prisma/prisma.service'

export interface CreateSessionServiceRequest {
  email: string
  password: string
}

@Injectable()
export class CreateSessionService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async handle(body: CreateSessionServiceRequest) {
    const { email, password } = body

    const user = await this.prismaService.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new UnauthorizedException('User credentials do not match')
    }

    const isPasswordMatch = await compare(password, user.password)

    if (!isPasswordMatch) {
      throw new UnauthorizedException('User credentials do not match')
    }

    const accessToken = this.jwtService.sign({ sub: user.id })

    return { accessToken }
  }
}
