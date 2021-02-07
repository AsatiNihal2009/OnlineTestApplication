import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions:any =[];
  constructor() { }

  addQuetion(question){
    this.questions.push(question);
  }

  getItems(){
    return this.questions;
  }
}
