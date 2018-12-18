import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';

// Angular Moment
import { MomentModule } from 'angular2-moment'

// Question
import { QuestionDetailComponent } from './question/question-detail.component';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';

// Answer
import { AnswerFormComponent } from './answer/answer-form.component';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';

// Auth
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
