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

  press(value: string) {
    this.input = value
    this.graphService.setData(this.input)
  }

  get(){
    this.output = this.graphService.getData()
    this.graphService.console()
    console.log(this.output + '  this is output')
  }


}
