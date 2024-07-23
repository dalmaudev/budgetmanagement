import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Developer } from '../../../models/developer.model';
import { CurrencyPipe } from '@angular/common';
import { EditDeveloperComponent } from '../../edit-developer/edit-developer.component';
import { DeveloperService } from '../../services/developer.service';
import { AddDeveloper } from '../../../models/addDeveloper.mode';

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
  devs!: Developer[];

  constructor(private developer: DeveloperService) {
    this.devs = this.developer.getDevsData();
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

  onEditDeveloper(devData: AddDeveloper) {
    const devId = this.devs.findIndex((dev) => dev.id === devData.id);
    if (devId !== -1) {
      this.devs[devId].budget = devData.budget;
      this.devs[devId].name = devData.name;
    }
    this.developer.saveDevs();
    this.isEditingDeveloper = false;
    console.log(this.devs);
  }
}
