import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'log-in-component',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})

export class LogInComponent {

  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {}

  get email() {
    return this.loginform.controls['email'];
  }
  get password() {
    return this.loginform.controls['password'];
  }

}
