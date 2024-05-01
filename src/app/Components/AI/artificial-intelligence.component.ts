import {Component} from '@angular/core';
import {GraphService} from "./graph.service";

@Component({
  selector: 'artificial-intelligence-component',
  templateUrl: './artificial-intelligence.component.html'
})

export class ArtificialIntelligenceComponent {

  input : any
  output: any

  constructor(private graphService: GraphService) {
}

  press() {
    this.graphService.setData(this.input)
    this.graphService.console()
  }

  get(){
    this.output = this.graphService.getData()
    console.log(this.output + '  this is output')
  }


}
