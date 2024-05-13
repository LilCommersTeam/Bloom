import {Component, ElementRef, EventEmitter, Output} from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',

})

export class ChatComponent{

  @ViewChild('messege') input!: ElementRef;
  @Output() newItemEvent = new EventEmitter<string>();
  messegeControl: boolean = true;


  get(value:any) {
    this.newItemEvent.emit(value);
    this.input.nativeElement.value = '';
    }




 /*  sendMessege(){
    const messege = this.messegeControl.value;

    if(messege){
      this.messegeControl.setValue('');
    }
  }*/



}
