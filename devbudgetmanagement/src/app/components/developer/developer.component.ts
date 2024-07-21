import { Component, Input } from '@angular/core';
import { Developer } from '../../../models/developer.model';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css',
})
export class DeveloperComponent {
  @Input({ required: true }) dev?: Developer;

  get devAvatarPath() {
    return 'assets/devs/avatar/' + this.dev?.avatar;
  }
}
