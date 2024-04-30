import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {routes} from "./app.routes";
import {UserModule} from "./Components/User/user.module";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {DashboardComponent} from "./Components/Dashboard/dashboard.component";

@NgModule({
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    UserModule,
    HttpClientModule,
    RouterLink,


  ],
  declarations: [
    DashboardComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
