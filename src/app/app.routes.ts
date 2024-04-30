import { Routes } from '@angular/router';
import {SignUpComponent} from "./Components/User/Sign-up/sign-up.component";
import {LogInComponent} from "./Components/User/Log-in/log-in.component";
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import {ArtificialIntelligenceComponent} from "./Components/AI/artificial-intelligence.component";

export const routes: Routes = [
  { path: 'Sign-up', component: SignUpComponent },
  { path: 'Log-in', component: LogInComponent},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'AI', component: ArtificialIntelligenceComponent},
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'Sign-up', pathMatch: 'full'}
];
