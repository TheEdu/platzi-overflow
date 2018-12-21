import { Component } from '@angular/core';
import { Question } from './question.model';

const q = new Question(
    'Como reutilizo un componente en android?',
    'Quisiera reutilizar un componente de material angular',
    new Date,
    'devicon-android-plain'
);

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent {
    questions: Question[] = new Array(10).fill(q);
};