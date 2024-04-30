import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'artificial-intelligence-component',
  templateUrl: './artificial-intelligence.component.html'
})

export class ArtificialIntelligenceComponent {
  @Output() graphInput = new EventEmitter<string>();

  press(value: string) {
    this.graphInput.emit(value);
    console.log(value)
  }

}
