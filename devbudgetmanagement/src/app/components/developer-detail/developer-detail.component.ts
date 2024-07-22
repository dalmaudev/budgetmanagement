import { Component, Input } from '@angular/core';
import { Developer } from '../../../models/developer.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-developer-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './developer-detail.component.html',
  styleUrl: './developer-detail.component.css',
})
export class DeveloperDetailComponent {
  @Input({ required: true }) dev?: Developer;
}
