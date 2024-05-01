import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {GraphComponent} from "./graph.component";
import {ArtificialIntelligenceComponent} from "./artificial-intelligence.component";
import {GraphService} from "./graph.service";


@NgModule({
  imports: [
    CommonModule

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
