import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up-first-step.component.html',
  styleUrl: './sign-up-first-step.component.css'
})
export class SignUpFirstStepComponent {

  form: FormGroup;

  constructor(){
    this.form = new FormGroup(
      {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required])
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(control: AbstractControl){
    return control.get('password')?.value === 
      control.get('confirmpassword')?.value
      ? null
      : { mismatch: true };
  }
}
