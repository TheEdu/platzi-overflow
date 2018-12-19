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
            title: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required)
        })
    };

    onSubmit(form: NgForm){
        if(this.questionForm.valid) {
            const { title, description } = this.questionForm.value
            const question = new Question(title, description, new Date(), "icon")
            console.log(question)
            form.resetForm()
        }
    };
}