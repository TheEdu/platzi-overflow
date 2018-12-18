import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Question } from './question.model';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.css']
})

export class QuestionFormComponent implements OnInit {
    questionForm: FormGroup;

    ngOnInit(){
        this.questionForm = new FormGroup({

        })
    };

    onSubmit(){
    };
}