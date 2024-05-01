import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {GraphComponent} from "./graph.component";
import {ArtificialIntelligenceComponent} from "./artificial-intelligence.component";
import {GraphService} from "./graph.service";
import {FormsModule} from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  declarations: [
    ArtificialIntelligenceComponent,
    GraphComponent
  ],
  providers:[
    GraphService
  ]


})
export class ArtificialIntelligenceModule { }
