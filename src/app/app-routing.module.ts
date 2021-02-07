import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:"quiz",component:QuizComponent},
  {path:"review",component:ReviewComponent},
  {path:"result",component:ResultComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
