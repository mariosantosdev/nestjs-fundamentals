import { Module } from '@nestjs/common'
import { CreateQuestionController } from './create-question/create-question.controller'
import { CreateQuestionService } from './create-question/create-question.service'

@Module({
  controllers: [CreateQuestionController],
  providers: [CreateQuestionService],
})
export class QuestionsModule {}
