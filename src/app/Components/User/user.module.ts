import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import { SignUpComponent} from "./Sign-up/sign-up.component";
import {NgModule} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LogInComponent } from "./Log-in/log-in.component";



@NgModule({
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterLink
  ],
  declarations: [
    SignUpComponent,
    LogInComponent
  ],

})
export class UserModule { }
