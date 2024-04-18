import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'sign-up-first-step',
  templateUrl: './sign-up-first-step.component.html',
  styleUrl: './sign-up-first-step.component.css'
})
export class SignUpFirstStepComponent {

  form: FormGroup;
  disabled: Boolean = false;

  constructor(){
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

    onSubmit(): void {
      this.form.reset()
      this.disabled = false;
    }
}
