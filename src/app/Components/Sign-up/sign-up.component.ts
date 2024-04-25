import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ValidatorFn, AbstractControlDirective, ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import {SignUpService} from "./sign-up.service";
import { validateHeaderName } from 'http';



@Component({
  selector: 'sign-up-component',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  ConfirmPassword(control: AbstractControl){
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { PasswordMismatch: false}


  }

  signupform = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9_]{7,29}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]

  },  { validators: this.ConfirmPassword
  }

)



  constructor(private fb: FormBuilder) {

  }

  get username() {
    return this.signupform.controls['username'];
  }

  get email() {
    return this.signupform.controls['email'];
  }

  get password() {
    return this.signupform.controls['password'];
  }

  get confirmPassword() {
    return this.signupform.controls['confirmPassword'];
  }
}
