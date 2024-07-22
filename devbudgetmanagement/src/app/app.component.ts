import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeveloperComponent } from './components/developer/developer.component';
import { DeveloperDetailComponent } from './components/developer-detail/developer-detail.component';
import { DeveloperService } from './services/developer.service';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeveloperComponent, DeveloperDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  appTitle = 'devbudgetmanagement';
  selectedUserId = '';
  devs!: Developer[];

  constructor(private developer: DeveloperService) {
    this.devs = this.developer.getDevsData();
  }

  get selectedDev() {
    return this.devs.find((dev) => dev.id === this.selectedUserId)!;
  }

  onSelectDev(id: string) {
    this.selectedUserId = id;
  }
}
