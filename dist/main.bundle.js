webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n    <mat-form-field>\r\n        <textarea \r\n            matInput \r\n            placeholder=\"Respuesta\" \r\n            name=\"description\"\r\n            ngModel></textarea>\r\n    </mat-form-field>\r\n    <button type=\"submit\" mat-raised-button color=\"primary\">Responder</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/answer/answer-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_model__ = __webpack_require__("../../../../../src/app/answer/answer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question_model__ = __webpack_require__("../../../../../src/app/question/question.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerFormComponent = (function () {
    function AnswerFormComponent() {
    }
    AnswerFormComponent.prototype.onSubmit = function (form) {
        var answer = new __WEBPACK_IMPORTED_MODULE_1__answer_model__["a" /* Answer */](form.value.description, this.question, new Date(), new __WEBPACK_IMPORTED_MODULE_2__auth_user_model__["a" /* User */](null, null, 'Eduardo', 'Denis'));
        this.question.answers.unshift(answer);
        form.reset(); //  Borrar los inputs del formulario
    };
    return AnswerFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__question_question_model__["a" /* Question */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__question_question_model__["a" /* Question */]) === "function" && _a || Object)
], AnswerFormComponent.prototype, "question", void 0);
AnswerFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-answer-form',
        template: __webpack_require__("../../../../../src/app/answer/answer-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answer/answer-form.component.css")]
    })
], AnswerFormComponent);

var _a;
//# sourceMappingURL=answer-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/answer/answer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer(description, question, createdAt, user) {
        this.description = description;
        this.question = question;
        this.createdAt = createdAt;
        this.user = user;
    }
    return Answer;
}());

//# sourceMappingURL=answer.model.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space {\r\n    -ms-flex: 1 1 auto;\r\n        flex: 1 1 auto;\r\n}\r\n\r\n[ng-reflect-router-link] {\r\n    cursor: pointer;\r\n  }\r\n  \r\n[ng-reflect-router-link]:focus {\r\n    outline: 0!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span [routerLink]=\"['/']\">Platzi Overflow</span>\n  <span class=\"space\"></span>\n  <mat-icon [routerLink]=\"['/signin']\">account_circle</mat-icon>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n<!-- <app-question-detail></app-question-detail> -->\n<!-- <app-signin-screen></app-signin-screen> -->\n<!-- <app-signup-screen></app-signup-screen> -->\n<!-- <app-question-list></app-question-list> -->\n<!-- <app-question-form></app-question-form> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_question_detail_component__ = __webpack_require__("../../../../../src/app/question/question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_question_list_component__ = __webpack_require__("../../../../../src/app/question/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_question_form_component__ = __webpack_require__("../../../../../src/app/question/question-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__answer_answer_form_component__ = __webpack_require__("../../../../../src/app/answer/answer-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_signin_screen_component__ = __webpack_require__("../../../../../src/app/auth/signin-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_signup_screen_component__ = __webpack_require__("../../../../../src/app/auth/signup-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Material Angular


// Angular Moment

// Question



// Answer


// Auth


// Routing

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__question_question_detail_component__["a" /* QuestionDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__answer_answer_form_component__["a" /* AnswerFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_signin_screen_component__["a" /* SigninScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_signup_screen_component__["a" /* SignupScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_7__question_question_list_component__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__question_question_form_component__["a" /* QuestionFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MyOwnCustomMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* Routing */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_question_list_component__ = __webpack_require__("../../../../../src/app/question/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_signin_screen_component__ = __webpack_require__("../../../../../src/app/auth/signin-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_signup_screen_component__ = __webpack_require__("../../../../../src/app/auth/signup-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_question_routing__ = __webpack_require__("../../../../../src/app/question/question.routing.ts");





var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__question_question_list_component__["a" /* QuestionListComponent */], pathMatch: 'full' },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__auth_signin_screen_component__["a" /* SigninScreenComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__auth_signup_screen_component__["a" /* SignupScreenComponent */] },
    { path: 'questions', children: __WEBPACK_IMPORTED_MODULE_4__question_question_routing__["a" /* QUESTION_ROUTES */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signin-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p-center {\r\n    text-align: left\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\" >\r\n    <mat-input-container>\r\n        <input \r\n            matInput \r\n            placeholder=\"Corre electrónico\" \r\n            formControlName=\"email\"\r\n            id=\"email\">\r\n    </mat-input-container>\r\n    <mat-input-container>\r\n        <input \r\n            matInput\r\n            type=\"password\"\r\n            placeholder=\"Contraseña\" \r\n            formControlName=\"password\"\r\n            id=\"password\">\r\n    </mat-input-container>\r\n    <div class=\"example-button-row\">\r\n        <button type=\"submit\" mat-raised-button color=\"accent\">Iniciar Sesión</button>\r\n        <p class=\"p-center\">\r\n            ¿Eres Nuevo?\r\n            <a mat-button color=\"primary\" [routerLink]=\"['/signup']\">Registrate!</a>\r\n        </p>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/auth/signin-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SigninScreenComponent = (function () {
    function SigninScreenComponent() {
    }
    SigninScreenComponent.prototype.ngOnInit = function () {
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    };
    SigninScreenComponent.prototype.onSubmit = function () {
        if (this.signinForm.valid) {
            var _a = this.signinForm.value, email = _a.email, password = _a.password;
            var user = new __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* User */](email, password);
            console.log(user);
        }
        else {
            console.log("Error de Validación");
        }
    };
    return SigninScreenComponent;
}());
SigninScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin-screen',
        template: __webpack_require__("../../../../../src/app/auth/signin-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signin-screen.component.css")]
    })
], SigninScreenComponent);

//# sourceMappingURL=signin-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit(formDirective)\" #formDirective=\"ngForm\">\r\n        <mat-input-container>\r\n            <input \r\n                matInput\r\n                type=\"text\"\r\n                placeholder=\"Nombre\" \r\n                formControlName=\"firstName\"\r\n                id=\"firstName\"\r\n                required>\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input \r\n                matInput\r\n                type=\"text\"\r\n                placeholder=\"Apellido\" \r\n                formControlName=\"lastName\"\r\n                id=\"lastName\"\r\n                required>\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input \r\n                matInput\r\n                type=\"email\"\r\n                placeholder=\"Correo Electrónico\" \r\n                formControlName=\"email\"\r\n                id=\"email\"\r\n                required>\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input \r\n                matInput\r\n                type=\"password\"\r\n                placeholder=\"Contraseña\" \r\n                formControlName=\"password\"\r\n                id=\"password\"\r\n                required>\r\n        </mat-input-container>\r\n        <mat-input-container>\r\n            <input \r\n                matInput\r\n                type=\"password\"\r\n                placeholder=\"Confirmar Contraseña\" \r\n                formControlName=\"passwordConfirm\"\r\n                id=\"passwordConfirm\"\r\n                required>\r\n        </mat-input-container>\r\n        <div class=\"example-button-row\">\r\n            <button type=\"submit\" mat-raised-button color=\"accent\">Iniciar Sesión</button>\r\n            <p class=\"p-center\">\r\n                ¿Ya tienes un usuario?\r\n                <a mat-button color=\"primary\" [routerLink]=\"['/signin']\">Iniciar Sesión</a>\r\n            </p>\r\n        </div>\r\n    </form>"

/***/ }),

/***/ "../../../../../src/app/auth/signup-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupScreenComponent = (function () {
    function SignupScreenComponent() {
    }
    SignupScreenComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            passwordConfirm: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    };
    SignupScreenComponent.prototype.onSubmit = function (form) {
        if (this.signupForm.valid) {
            var _a = this.signupForm.value, fisrtName = _a.fisrtName, lastName = _a.lastName, email = _a.email, password = _a.password, passwordConfirm = _a.passwordConfirm;
            if (password === passwordConfirm) {
                var user = new __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* User */](email, password, fisrtName, lastName);
                console.log(user);
                form.resetForm();
                // this.signupForm.reset()
            }
            else {
                console.log("La contraseña y su confirmación deben coincidir");
            }
        }
        else {
            console.log("Error de Validación");
        }
    };
    return SignupScreenComponent;
}());
SignupScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup-screen',
        template: __webpack_require__("../../../../../src/app/auth/signup-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signin-screen.component.css")]
    })
], SignupScreenComponent);

//# sourceMappingURL=signup-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOwnCustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatRadioModule */]
];
var MyOwnCustomMaterialModule = (function () {
    function MyOwnCustomMaterialModule() {
    }
    return MyOwnCustomMaterialModule;
}());
MyOwnCustomMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: modules,
        exports: modules,
    })
], MyOwnCustomMaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/question/icons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        "name": "amazonwebservices",
        "tags": ["cloud", "hosting", "server"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain-wordmark"],
            "font": ["original", "plain-wordmark"]
        }
    },
    {
        "name": "android",
        "tags": ["os", "mobile"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "angularjs",
        "tags": ["framework", "javascript"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "appcelerator",
        "tags": ["app", "mobile"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain-wordmark"],
            "font": ["original", "plain-wordmark"]
        }
    },
    {
        "name": "apple",
        "tags": ["brand", "mobile"],
        "versions": {
            "svg": ["original"],
            "font": ["original"]
        }
    },
    {
        "name": "atom",
        "tags": ["editor"],
        "versions": {
            "svg": ["original", "original-wordmark"],
            "font": ["original", "original-wordmark"]
        }
    },
    {
        "name": "backbonejs",
        "tags": ["javascript", "framework"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "bootstrap",
        "tags": ["css", "framework"],
        "versions": {
            "svg": ["plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "bower",
        "tags": ["package", "manager"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
            "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
        }
    },
    {
        "name": "chrome",
        "tags": ["browser"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "codeigniter",
        "tags": ["php", "framework"],
        "versions": {
            "svg": ["plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "css3",
        "tags": ["language", "programming"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "debian",
        "tags": ["os", "server"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "dot-net",
        "tags": ["framework"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "drupal",
        "tags": ["cms"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "firefox",
        "tags": ["browser"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "foundation",
        "tags": ["framework", "css"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "git",
        "tags": ["version-control"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "grunt",
        "tags": ["task-runner", "nodejs"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
            "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
        }
    },
    {
        "name": "gulp",
        "tags": ["task-runner", "nodejs"],
        "versions": {
            "svg": ["plain"],
            "font": ["plain"]
        }
    },
    {
        "name": "html5",
        "tags": ["programming", "language"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "ie10",
        "tags": ["browser"],
        "versions": {
            "svg": ["original"],
            "font": ["original"]
        }
    },
    {
        "name": "illustrator",
        "tags": ["editor", "vector"],
        "versions": {
            "svg": ["plain", "line"],
            "font": ["original"]
        }
    },
    {
        "name": "java",
        "tags": ["programming", "language"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "javascript",
        "tags": ["programming", "language"],
        "versions": {
            "svg": ["original", "plain"],
            "font": ["plain"]
        }
    },
    {
        "name": "jquery",
        "tags": ["library", "javascript"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "krakenjs",
        "tags": ["nodejs", "framework"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "laravel",
        "tags": ["php", "framework"],
        "versions": {
            "svg": ["plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "less",
        "tags": ["css", "pre-processor"],
        "versions": {
            "svg": ["plain-wordmark"],
            "font": ["plain-wordmark"]
        }
    },
    {
        "name": "linux",
        "tags": ["os"],
        "versions": {
            "svg": ["original", "plain"],
            "font": ["plain"]
        }
    },
    {
        "name": "mongodb",
        "tags": ["database"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "moodle",
        "tags": ["platform"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "mysql",
        "tags": ["database", "language"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "nodejs",
        "tags": ["javascript", "language"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "oracle",
        "tags": ["database"],
        "versions": {
            "svg": ["original"],
            "font": ["original"]
        }
    },
    {
        "name": "photoshop",
        "tags": ["editor", "graphic"],
        "versions": {
            "svg": ["plain", "line"],
            "font": ["plain", "line"]
        }
    },
    {
        "name": "php",
        "tags": ["programming", "language"],
        "versions": {
            "svg": ["original", "plain"],
            "font": ["plain"]
        }
    },
    {
        "name": "postgresql",
        "tags": ["database"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "python",
        "tags": ["programming", "language"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "rails",
        "tags": ["framework"],
        "versions": {
            "svg": ["original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "ruby",
        "tags": ["programming", "language"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "sass",
        "tags": ["pre-processor", "css"],
        "versions": {
            "svg": ["original"],
            "font": ["original"]
        }
    },
    {
        "name": "travis",
        "tags": ["platform", "integration"],
        "versions": {
            "svg": ["plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "trello",
        "tags": ["platform", "organize"],
        "versions": {
            "svg": ["plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "ubuntu",
        "tags": ["os"],
        "versions": {
            "svg": ["plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "windows8",
        "tags": ["os"],
        "versions": {
            "svg": ["original", "original-wordmark"],
            "font": ["original", "original-wordmark"]
        }
    },
    {
        "name": "wordpress",
        "tags": ["cms"],
        "versions": {
            "svg": ["original", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "yii",
        "tags": ["php", "framework"],
        "versions": {
            "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    },
    {
        "name": "zend",
        "tags": ["php", "framework"],
        "versions": {
            "svg": ["plain", "plain-wordmark"],
            "font": ["plain", "plain-wordmark"]
        }
    }
]);
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "../../../../../src/app/question/question-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon {\r\n    font-size: 38px;\r\n}\r\n.question-card {\r\n    max-width: 400px;\r\n}\r\n\r\n.answers {\r\n    padding: 12px;\r\n  }\r\n  \r\n  .answers-list {\r\n    padding: 0;\r\n    list-style-type: none;\r\n    padding-bottom: 160px;\r\n  }\r\n  \r\n  h5 {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  h5 small {\r\n    font-weight: normal;\r\n    font-size: smaller;\r\n    color: rgba(0, 0, 0, .54);\r\n  }\r\n  \r\n  .description {\r\n    padding-left: 6px;\r\n    border-left: 2px solid #eee;\r\n    font-size: 14px;\r\n    margin-top: 6px;\r\n  }\r\n\r\n  .answer-form {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    z-index: 2;\r\n    background-color: white;\r\n    border-top: 1px solid #dcdcdc;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"question-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"\">\r\n      <i mat-list-icon class=\"{{ question.icon }} icon\"></i>\r\n    </div>\r\n    <mat-card-title>{{ question.title }}</mat-card-title>\r\n    <mat-card-subtitle>Eduardo Denis - {{ question.createdAt | amLocale:'es' | amTimeAgo}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      {{ question.description }}\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<div class=\"answers\">\r\n  <h3> Respuestas </h3>\r\n\r\n  <ul class=\"answers-list\" *ngIf=\"question.answers.length > 0\">\r\n    <li *ngFor=\"let answer of question.answers\">\r\n      <h5> {{ answer.user.fullName() }} \r\n        <small> {{ answer.createdAt | amLocale:'es' | amTimeAgo}} </small>\r\n      </h5>\r\n      <p class=\"description\"> {{ answer.description }} </p>\r\n    </li>\r\n  </ul>\r\n\r\n  <p *ngIf=\"question.answers.length === 0\"> Sé el primero en responder esta pregunta </p>\r\n  \r\n  <app-answer-form [question]=\"question\" class=\"answer-form\"></app-answer-form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/question/question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_model__ = __webpack_require__("../../../../../src/app/question/question.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var QuestionDetailComponent = (function () {
    function QuestionDetailComponent() {
        this.question = new __WEBPACK_IMPORTED_MODULE_1__question_model__["a" /* Question */]('Esta es una nueva pregunta sobre Android', 'tengo una duda sobre una aplicacion nueva de Android', new Date, 'devicon-android-plain');
    }
    return QuestionDetailComponent;
}());
QuestionDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-detail',
        template: __webpack_require__("../../../../../src/app/question/question-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question-detail.component.css")]
    })
], QuestionDetailComponent);

//# sourceMappingURL=question-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\r\n    font-size: 35px;\r\n}\r\n\r\nsmall {\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"questionForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n    <mat-input-container>\r\n        <input\r\n            matInput\r\n            placeholder=\"Título\"\r\n            formControlName=\"title\"\r\n            type=\"text\"\r\n            id=\"title\"\r\n            required>\r\n    </mat-input-container>\r\n    <mat-input-container>\r\n        <input \r\n            matInput \r\n            placeholder=\"Descripción\" \r\n            formControlName=\"description\"\r\n            type=\"text\"\r\n            id=\"description\"\r\n            required>\r\n    </mat-input-container>\r\n    <mat-grid-list cols=\"3\" rowHeight=\"3:2\">\r\n        \r\n        <mat-grid-tile>\r\n            <mat-radio-group formControlName=\"icon\" name=\"icon\">\r\n                <mat-radio-button value=\"none\">\r\n                    <i mat-list-icon class=\"material-icons\">help</i>\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile *ngFor=\"let icon of icons\">\r\n            <mat-radio-group formControlName=\"icon\" name=\"icon\">\r\n                <mat-radio-button value=\"devicon-{{ icon.name }}-{{ getIconVersion(icon) }}\">\r\n                    <i mat-list-icon class=\"devicon-{{ icon.name }}-{{ getIconVersion(icon) }} colored\"></i>\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n    <div class=\"example-button-row\">\r\n        <button type=\"submit\" mat-raised-button color=\"accent\">Nueva Pregunta</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/question/question-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_model__ = __webpack_require__("../../../../../src/app/question/question.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons__ = __webpack_require__("../../../../../src/app/question/icons.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuestionFormComponent = (function () {
    function QuestionFormComponent() {
        this.icons = __WEBPACK_IMPORTED_MODULE_3__icons__["a" /* default */];
    }
    QuestionFormComponent.prototype.getIconVersion = function (icon) {
        var version;
        if (icon.versions.font.includes('plain-wordmark')) {
            version = 'plain-wordmark';
        }
        else {
            version = icon.versions.font[0];
        }
        if (icon.name == 'illustrator') {
            version = icon.versions.svg[0];
        }
        return version;
    };
    QuestionFormComponent.prototype.ngOnInit = function () {
        this.questionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            icon: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    };
    ;
    QuestionFormComponent.prototype.onSubmit = function (form) {
        if (this.questionForm.valid) {
            var _a = this.questionForm.value, title = _a.title, description = _a.description, icon = _a.icon;
            var question = new __WEBPACK_IMPORTED_MODULE_2__question_model__["a" /* Question */](title, description, new Date(), icon);
            console.log(question);
            form.resetForm();
        }
    };
    ;
    return QuestionFormComponent;
}());
QuestionFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-form',
        template: __webpack_require__("../../../../../src/app/question/question-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question-form.component.css")]
    })
], QuestionFormComponent);

//# sourceMappingURL=question-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\r\n    font-size: 40px;\r\n}\r\n\r\ni.help {\r\n    width: 48px !important;\r\n    height: 48px !important;\r\n    padding: 0 !important;\r\n    font-size: 48px !important;\r\n}\r\n\r\n.add-question {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    font-size: 20px;\r\n}\r\n\r\n.question-list {\r\n    padding-right: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"question-list\">\r\n    <h3 mat-subheader>Preguntas</h3>\r\n    <mat-list-item *ngFor=\"let question of questions\" [routerLink]=\"['questions', question._id]\">\r\n        <i *ngIf=\"question.icon === 'none'\" mat-list-icon class=\"material-icons help\">help</i>\r\n        <i *ngIf=\"question.icon !== 'none'\" mat-list-icon class=\"{{ question.icon }} icon\"></i>\r\n        <h3 mat-line>{{ question.title }}</h3>\r\n        <small> {{ question.answers.length }} respuestas - \r\n                {{ question.createdAt | amLocale:'es' | amTimeAgo}}\r\n        </small>\r\n    </mat-list-item>\r\n</mat-list>\r\n<button mat-fab class=\"add-question\" color=\"accent\" [routerLink]=\"['questions/new']\">\r\n    +\r\n</button>"

/***/ }),

/***/ "../../../../../src/app/question/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_model__ = __webpack_require__("../../../../../src/app/question/question.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var q = new __WEBPACK_IMPORTED_MODULE_1__question_model__["a" /* Question */]('Como reutilizo un componente en android?', 'Quisiera reutilizar un componente de material angular', new Date, 'devicon-android-plain');
var QuestionListComponent = (function () {
    function QuestionListComponent() {
        this.questions = new Array(10).fill(q);
    }
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-list',
        template: __webpack_require__("../../../../../src/app/question/question-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question-list.component.css")]
    })
], QuestionListComponent);

//# sourceMappingURL=question-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(title, description, createdAt, icon) {
        this._id = '1';
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;
        this.answers = [];
    }
    return Question;
}());

//# sourceMappingURL=question.model.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUESTION_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_list_component__ = __webpack_require__("../../../../../src/app/question/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_detail_component__ = __webpack_require__("../../../../../src/app/question/question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_form_component__ = __webpack_require__("../../../../../src/app/question/question-form.component.ts");
//question.routing.ts



var QUESTION_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__question_list_component__["a" /* QuestionListComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__question_detail_component__["a" /* QuestionDetailComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_2__question_form_component__["a" /* QuestionFormComponent */] }
];
//# sourceMappingURL=question.routing.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ku": "../../../../moment/locale/ku.js",
	"./ku.js": "../../../../moment/locale/ku.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map