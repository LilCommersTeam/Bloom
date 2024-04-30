import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ValidatorFn, AbstractControlDirective, ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import {UserService} from "../user.service";
import { validateHeaderName } from 'http';



@Component({
  selector: 'sign-up-component',
  inputs: ['email', 'password', 'username'],
  outputs: ['key','email', 'password', 'username', 'id'],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  ConfirmPassword(control: AbstractControl){
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: false}


  }

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9_]{7,29}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]

  },  { validators: this.ConfirmPassword
  }

)



  constructor(private formBuilder: FormBuilder) {

  }

  get username() {
    return this.signUpForm.controls['username'];
  }

  get email() {
    return this.signUpForm.controls['email'];
  }

  get password() {
    return this.signUpForm.controls['password'];
  }

  get confirmPassword() {
    return this.signUpForm.controls['confirmPassword'];
  }
}
