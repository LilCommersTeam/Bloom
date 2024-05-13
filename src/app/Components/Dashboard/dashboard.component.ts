import { Component} from '@angular/core';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

ChatIsClosed : boolean = true;
items : String[] = []
notification : String = 'hi, how can i help you?'
warningForLogin : String = 'please log in before sending your messege'


toggleChat(){
  this.ChatIsClosed = !this.ChatIsClosed;
}
addItem(newItem: string) {
    this.items.push(newItem);
  }


}
