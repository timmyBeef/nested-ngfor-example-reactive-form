import { AnswerDto } from './answer.dto';
import { QuestionDto } from './question.dto';

export interface QuestionAnswersDto {

  question: QuestionDto;
  answers: AnswerDto[];

}
