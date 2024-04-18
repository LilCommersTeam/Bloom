import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import { SignUpFirstStepComponent} from "./First-step/sign-up-first-step.component";
import {NgModule} from "@angular/core";
import {SignUpSecondStepComponent} from "./Second-step/sign-up-second-step.component";
import {SignUpThirdStepComponent} from "./Third-step/sign-up-third-step.component";

@NgModule({
  imports: [
    RouterOutlet,
    CommonModule,
  ],
  declarations: [
    SignUpFirstStepComponent,
    SignUpSecondStepComponent,
    SignUpThirdStepComponent


  ],

})
export class SignUpModule { }
