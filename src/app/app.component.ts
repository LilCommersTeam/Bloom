import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bloom';
}
