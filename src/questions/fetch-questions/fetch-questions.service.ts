import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma/prisma.service'

export interface FetchQuestionsServiceRequest {
  authorId: string
  page?: number
  perPage?: number
}

@Injectable()
export class FetchQuestionsService {
  constructor(private prismaService: PrismaService) {}

  async handle({
    authorId,
    perPage = 10,
    page = 1,
  }: FetchQuestionsServiceRequest) {
    const questions = await this.prismaService.question.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: { createdAt: 'desc' },
      where: { authorId },
    })

    return { questions }
  }
}
