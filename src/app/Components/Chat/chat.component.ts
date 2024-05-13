import { AfterContentInit, AfterViewInit, Component, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  
})

export class ChatComponent{
  
  @ViewChild('messege') input!: ElementRef;

  console.log(this.input.value);
  

  messegeControl: boolean = false;

 /*  sendMessege(){
    const messege = this.messegeControl.value;
    
    if(messege){
      this.messegeControl.setValue('');
    }
  }*/


  
}