import {Component, Input} from '@angular/core';

interface Dictionary<T> {
  [Key: string]: T;
}

@Component({
  selector: 'graph-component',
  template: ``,
})

export class GraphComponent {

  @Input() input: any='input initialized '

  graph: Dictionary<any> = {
    'layer-0': this.input,
    'layer-1': null,
    'layer-2': null,
    'layer-3': null,
    'layer-4': null,
    'layer-5': null
  }

  constructor() {
    console.log(Object.values(this.graph)[0])
  }

  get(){

  }


}

