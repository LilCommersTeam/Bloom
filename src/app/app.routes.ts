import { Routes } from '@angular/router';
import {SignUpFirstStepComponent} from "./Components/Sign-up/First-step/sign-up-first-step.component";
import {SignUpSecondStepComponent} from "./Components/Sign-up/Second-step/sign-up-second-step.component";
import {SignUpThirdStepComponent} from "./Components/Sign-up/Third-step/sign-up-third-step.component";

export const routes: Routes = [
  { path: 'Sign-up-first-step', component: SignUpFirstStepComponent },
  { path: 'Sign-up-second-step', component: SignUpSecondStepComponent },
  { path: 'Sign-up-third-step', component: SignUpThirdStepComponent },
];
