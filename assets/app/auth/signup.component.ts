import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    dob:any;

    constructor(private authService: AuthService) {}

    onSubmit() {
        this.dob=this.myForm.value.month+
            this.myForm.value.day+
            this.myForm.value.year;

        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.userName,
            this.dob,
            this.myForm.value.gender,
            this.myForm.value.country

        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({

            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
            userName: new FormControl(null, Validators.required),
            month: new FormControl(null,Validators.required),
            day: new FormControl(null,Validators.required),
            year: new FormControl(null,Validators.required),
            gender: new FormControl(null,Validators.required),
            country: new FormControl(null, Validators.required)
        });
    }
}