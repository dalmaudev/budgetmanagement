import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeveloperComponent } from './components/developer/developer.component';
import { DeveloperDetailComponent } from './components/developer-detail/developer-detail.component';
import { DeveloperService } from './services/developer.service';
import { type Developer } from '../models/developer.model';
import { type AddDeveloper } from '../models/addDeveloper.mode';
import { NewDeveloperComponent } from './new-developer/new-developer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DeveloperComponent,
    DeveloperDetailComponent,
    NewDeveloperComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  appTitle = 'devbudgetmanagement';
  selectedDevId = '';
  devs!: Developer[];
  isAddingDeveloper = false;
  DEV_AVATAR_DEFAULT = 'user-3.jpg';

  constructor(private developerService: DeveloperService) {
    this.devs = this.developerService.getDevsData();
  }

  get selectedDev() {
    return this.devs.find((dev) => dev.id === this.selectedDevId)!;
  }

  onSelectDev(id: string) {
    this.selectedDevId = id;
  }

  onStartAddDeveloper() {
    this.isAddingDeveloper = true;
  }

  onCancelAddDeveloper() {
    this.isAddingDeveloper = false;
  }

  onAddDeveloper(devData: AddDeveloper) {
    this.developerService.addDeveloper(devData);
    this.isAddingDeveloper = false;
  }

  onRemoveDeveloper(selectedDevId: string) {
    this.developerService.removeDeveloper(selectedDevId);
    this.devs = this.developerService.devs;
  }
}
