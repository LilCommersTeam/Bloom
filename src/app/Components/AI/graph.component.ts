import {Component, Input} from '@angular/core';

interface Dictionary<T> {
  [Key: string]: T;
}

@Component({
  selector: 'artificial-intelligence-component',
  template: ``,
  standalone: true,
})

export class GraphComponent {

  @Input() input = null

  graph: Dictionary<any> = {
    'layer-0': this.input,
    'layer-1': null,
    'layer-2': null,
    'layer-3': null,
    'layer-4': null,
    'layer-5': null
  }

}

