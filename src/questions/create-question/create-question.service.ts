import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma/prisma.service'

export interface CreateQuestionServiceRequest {
  title: string
  slug?: string
  content: string
  authorId: string
}

@Injectable()
export class CreateQuestionService {
  constructor(private prismaService: PrismaService) {}

  async handle(request: CreateQuestionServiceRequest) {
    const { authorId, content, slug, title } = request

    const slugFromTitle = title
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return this.prismaService.question.create({
      data: {
        title,
        content,
        slug: slug ?? slugFromTitle,
        authorId,
      },
    })
  }
}
