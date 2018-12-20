//question.routing.ts
import { QuestionListComponent } from'./question-list.component';
import { QuestionDetailComponent } from'./question-detail.component';
import { QuestionFormComponent } from'./question-form.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionListComponent },
  { path: ':id', component: QuestionDetailComponent },
  { path: 'new', component: QuestionFormComponent }
];