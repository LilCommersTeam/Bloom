import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import {SignUpService} from "./sign-up.service";


@Component({
  selector: 'sign-up-first-step',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpFirstStepComponent implements OnInit {

  form: FormGroup;
  disabled: Boolean = false;

  constructor(
    private service : SignUpService
  ){
    this.form = new FormGroup(
      {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(control: AbstractControl){
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  signupUsers: any[] = [];
    signupObj: any = {
        userName: '',
        email: '',
        password: ''
    };
    loginObj: any = {
        userName: '',
        password: ''
    };

    onSubmit(): void {
      this.form.reset()
      this.disabled = false;
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
      this.signupObj = {
        userName: '',
        email: '',
        password: ''
    };
    }

    ngOnInit(): void{
      const localData = localStorage.getItem('signupUsers');
      if(localData != null) {
        this.signupUsers = JSON.parse(localData);
      }

    }

}

