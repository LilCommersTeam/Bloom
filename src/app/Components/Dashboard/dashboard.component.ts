import { Component} from '@angular/core';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

ChatIsClosed : boolean = true;

toggleChat(){
  this.ChatIsClosed = !this.ChatIsClosed;
}


  
}
