import { Module } from '@nestjs/common'
import { CreateQuestionController } from './create-question/create-question.controller'
import { CreateQuestionService } from './create-question/create-question.service'
import { FetchQuestionsService } from './fetch-questions/fetch-questions.service';
import { FetchQuestionsController } from './fetch-questions/fetch-questions.controller';

@Module({
  controllers: [CreateQuestionController, FetchQuestionsController],
  providers: [CreateQuestionService, FetchQuestionsService],
})
export class QuestionsModule {}
