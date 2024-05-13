import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'panel-component',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})

export class PanelComponent {
  elements = ['main']
  @ViewChild('element') element!: ElementRef;


  get(value:any){
  if(value !== '' ){this.elements.push(value)}
  this.element.nativeElement.value = '';

}
}
