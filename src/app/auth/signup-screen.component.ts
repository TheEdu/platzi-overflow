import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html',
    styleUrls: ['./signin-screen.component.css']
})


export class SignupScreenComponent implements OnInit {
    signupForm: FormGroup;

    ngOnInit() {
        this.signupForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required),
            passwordConfirm: new FormControl(null, Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required)
        });
    }

    onSubmit(form: NgForm) {
        if (this.signupForm.valid) {
            const { fisrtName, lastName, email, password, passwordConfirm } = this.signupForm.value;
            if (password === passwordConfirm) {
                const user = new User(email, password, fisrtName, lastName);
                console.log(user);
                form.resetForm();
                // this.signupForm.reset()
            } else {
                console.log('La contraseña y su confirmación deben coincidir');
            }
        } else {
            console.log('Error de Validación');
        }
    }
}
