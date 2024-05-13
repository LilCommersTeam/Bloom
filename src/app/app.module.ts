import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {routes} from "./app.routes";
import {UserModule} from "./Components/User/user.module";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {DashboardComponent} from "./Components/Dashboard/dashboard.component";
import {ContactUsComponent} from "./Components/Contact-us/contact-us.component";
import {ChatComponent} from "./Components/Chat/chat.component";
import {ArtificialIntelligenceModule} from "./Components/AI/artificial-intelligence.module";
import {AdminComponent} from "./Components/Admin/admin.component";

@NgModule({
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    UserModule,
    HttpClientModule,
    RouterLink,
    ArtificialIntelligenceModule



  ],
  declarations: [
    DashboardComponent,
    ContactUsComponent,
    ChatComponent,
    AdminComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
