import {RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import { SignUpFirstStepComponent} from "./sign-up.component";
import {NgModule} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    SignUpFirstStepComponent,
  ],

})
export class SignUpModule { }
