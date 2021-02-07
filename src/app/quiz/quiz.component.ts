import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from './service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizForm:FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService
    ) { 
      this.quizForm = this.formBuilder.group({
        question:['',[Validators.minLength(2)]],
        firstChoice:['',[Validators.minLength(2)]],
        secondChoice:['',[Validators.minLength(2)]],
        answer:['',[Validators.minLength(2)]]
      });
    }

    
  ngOnInit = (): void => {}
  
  resetForm = (form:any) => {
    form.reset();
  }
  download=(content:any, fileName:any, contentType:any)=> {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  
  onSubmit = (form:any) => {
    this.quizService.addQuetion(form);

    this.download(JSON.stringify(form.value), 'data.json', 'application/json');
    window.alert("Your Question is added");
    this.quizForm.reset();
  }
}
