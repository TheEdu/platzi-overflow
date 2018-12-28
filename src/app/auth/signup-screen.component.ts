import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html',
    styleUrls: ['./signin-screen.component.css']
})


export class SignupScreenComponent implements OnInit {
    signupForm: FormGroup;

    constructor(private authService: AuthService) {}

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
            const { firstName, lastName, email, password, passwordConfirm } = this.signupForm.value;
            if (password === passwordConfirm) {
                const user = new User(email, password, firstName, lastName);
                console.log(user);
                // form.resetForm();
                this.authService.signup(user)
                    .subscribe(
                        () => console.log('Signup Exitoso!!!'),
                        this.authService.handleError
                    );
            } else {
                console.log('La contraseña y su confirmación deben coincidir');
            }
        } else {
            console.log('Error de Validación');
        }
    }
}
