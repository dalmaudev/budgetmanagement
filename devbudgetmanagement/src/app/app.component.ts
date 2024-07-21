import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeveloperComponent } from './components/developer/developer.component';
import { DEVS_DATA } from '../assets/data/devs-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  devs = DEVS_DATA;
  title = 'devbudgetmanagement';
}
