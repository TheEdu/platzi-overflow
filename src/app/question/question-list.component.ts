import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css'],
    providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
    questions: Question[];
    loading: Boolean =  true; // Indica si estamos pidiendo los datos o no del BackEnd

    constructor(private questionService: QuestionService) {}

    ngOnInit() {
        this.loading = true;
        this.questionService
            .getQuestions()
            .then((questions: Question[]) => {
                this.questions = questions;
                this.loading = false;
            });
    }

}
