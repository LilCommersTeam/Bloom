import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {routes} from "./app.routes";
import {SignUpModule} from "./Components/Sign-up/sign-up.module";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SignUpModule,
    HttpClientModule

  ],
  declarations: [

  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
