import { Component, OnInit } from '@angular/core';
import { QuestionAnswersDto } from '../dto/question-answers.dto';
import { QuestionDto } from '../dto/question.dto';
import { AnswerDto } from '../dto/answer.dto';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nested-ngfor-reactive-form',
  templateUrl: './nested-ngfor-reactive-form.component.html',
  styleUrls: ['./nested-ngfor-reactive-form.component.css']
})
export class NestedNgforReactiveFormComponent implements OnInit {

  qaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // create Q & A FORM
    this.createForm();
  }

  createForm() {

    // initial data
    const defalutData = [{
      question: <QuestionDto>{ questionContent: 'Do you have any hobbies?', questionOrder: 0, isDefaut: true },
      answers: [
        <AnswerDto>{ answerContent: 'I like to swim.', isDefaut: true },
        <AnswerDto>{ answerContent: 'I like to play basketball.', isDefaut: false },
        <AnswerDto>{ answerContent: 'I like to play badminton.', isDefaut: false }
      ]
    }];

    // create Q & A FORM by initial data
    this.qaForm = this.fb.group({
      qa: this.createQAArray(defalutData)
    });
  }

  // create Q & A Array
  createQAArray(qaAry: QuestionAnswersDto[]): FormArray {
    return this.fb.array(qaAry.map(qa => {
      return this.createQA(qa);
    }));

  }

  // create Q & A
  createQA(qa: QuestionAnswersDto) {
    return this.fb.group({
      question: this.createQuestion(qa.question),
      answers: this.createAnswerArray(qa.answers)
    });
  }

  // create Q
  createQuestion(q: QuestionDto): FormGroup {
    return this.fb.group({
      questionContent: new FormControl(q.questionContent, Validators.required),
      questionOrder: new FormControl(q.questionOrder),
      isDefaut: new FormControl(q.isDefaut)
    });
  }



  // create Answers array
  createAnswerArray(answers: AnswerDto[]): FormArray {
    return this.fb.array(answers.map(a => {
      return this.createAnswer(a);
    }));
  }

  // create Answer
  createAnswer(a: AnswerDto): FormGroup {
    return this.fb.group({
      answerContent: new FormControl(a.answerContent, Validators.required),
      isDefaut: new FormControl(a.isDefaut)
    });
  }

  // get qa formArray
  get qaFormArray() {
    return this.qaForm.get('qa') as FormArray;
  }

  // get answerArray
  public getAnswerArray(qIndex: number) {
    return this.qaFormArray.controls[qIndex].get('answers') as FormArray;
  }


  // add a question by index
  addQuestionByIndex(qIndex) {
    const qa: QuestionAnswersDto = {
      question: <QuestionDto>{ questionContent: '', questionOrder: null, isDefaut: null },
      answers: []
    };
    this.qaFormArray.insert(qIndex, this.createQA(qa));

  }

  // remove a question by index
  removeQuestionByIndex(qIndex: number) {
    if (qIndex > -1) {
      this.qaFormArray.removeAt(qIndex);
    }
  }

  // add a ans in question
  addAns(qIndex: number) {
    const a: AnswerDto = <AnswerDto>{ answerContent: '', isDefaut: null };
    const answersAry = this.getAnswerArray(qIndex);
    answersAry.push(this.createAnswer(a));
  }

  // remove a ans
  removeAns(qIndex: number, aIndex: number) {
    if (aIndex > -1) {
      const answersAry = this.getAnswerArray(qIndex);
      answersAry.removeAt(aIndex);
    }
  }

}
