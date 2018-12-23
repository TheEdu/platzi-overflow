import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Question } from './question.model';
import icons from './icons';
import { QuestionService } from './question.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.css'],
    providers: [QuestionService]
})

export class QuestionFormComponent implements OnInit {
    questionForm: FormGroup;
    icons: Object[] = icons;

    constructor(
        private questionService: QuestionService,
        private router: Router
    ) {}

    getIconVersion (icon: any) {
        let version;
        if (icon.versions.font.includes('plain-wordmark')) {
            version = 'plain-wordmark';
        } else {
            version = icon.versions.font[0];
        }

        if (icon.name === 'illustrator') {
            version = icon.versions.svg[0];
        }
        return version;
    }

    ngOnInit () {
        this.questionForm = new FormGroup({
            title: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            icon: new FormControl(null, Validators.required)
        });
    }

    onSubmit (form: NgForm) {
        if (this.questionForm.valid) {
            const { title, description, icon } = this.questionForm.value;
            const question = new Question(title, description, new Date(), icon);
            console.log(question);
            form.resetForm();
            this.questionService.addQuestion(question)
                .subscribe(
                    ({ _id }) => {
                        console.log(_id);
                        this.router.navigate(['/questions', _id]);
                    },
                    (error) => { console.log(error); }
                );
        }
    }
}
