import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Developer } from '../../../models/developer.model';
import { CurrencyPipe } from '@angular/common';
import { EditDeveloperComponent } from '../../edit-developer/edit-developer.component';
import { DeveloperService } from '../../services/developer.service';

@Component({
  selector: 'app-developer-detail',
  standalone: true,
  imports: [CurrencyPipe, EditDeveloperComponent],
  templateUrl: './developer-detail.component.html',
  styleUrl: './developer-detail.component.css',
})
export class DeveloperDetailComponent {
  @Input({ required: true }) dev?: Developer;
  @Output() delete = new EventEmitter<string>();
  isEditingDeveloper = false;
  devs: Developer[];

  constructor(private developerService: DeveloperService) {
    this.devs = this.developerService.getDevsData();
  }

  onDeletedDev() {
    this.delete.emit(this.dev?.id);
  }

  onStartEditDeveloper() {
    this.isEditingDeveloper = true;
  }

  onCancelEditDeveloper() {
    this.isEditingDeveloper = false;
  }

  onEditDeveloper(editedDeveloper: Developer) {
    this.devs = this.developerService.editDeveloper(editedDeveloper);
    this.isEditingDeveloper = false;
  }
}
