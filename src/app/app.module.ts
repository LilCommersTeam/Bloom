import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {RouterOutlet} from "@angular/router";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {routes} from "./app.routes";
import {SignUpModule} from "./Components/Sign-up/sign-up.module";

@NgModule({
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule.forChild(routes),
    SignUpModule
  ],
  declarations: [

  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
