import { Routes } from '@angular/router';
import {SignUpComponent} from "./Components/Sign-up/sign-up.component";
import {LogInComponent} from "./Components/Log-in/log-in.component";
import { DashboardComponent } from './Components/Dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'Sign-up', component: SignUpComponent },
  { path: 'Log-in', component: LogInComponent},
  { path: 'Dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'Sign-up', pathMatch: 'full'}
];
