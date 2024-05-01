import {Component} from '@angular/core';
import {GraphService} from "./graph.service";


interface Dictionary<T> {
  [Key: string]: T;
}

@Component({
  selector: 'graph-component',
  template: `
  <button (click)="get()">get</button>
  `,
})

export class GraphComponent {

  input : any

  constructor(private graphService: GraphService) {
  }

  graph: Dictionary<any> = {
    'layer-0': '',
    'layer-1': null,
    'layer-2': null,
    'layer-3': null,
    'layer-4': null,
    'layer-5': null
  }

  get(){
    this.input = this.graphService.getData()
    console.log(this.input + ' this is input')
  }


}

