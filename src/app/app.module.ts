import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';

// Question
import { QuestionDetailComponent } from './question/question-detail.component';

// Angular Moment
import { MomentModule } from 'angular2-moment'

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
