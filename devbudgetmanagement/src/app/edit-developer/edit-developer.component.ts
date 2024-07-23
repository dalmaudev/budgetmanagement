import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Developer } from '../../models/developer.model';
import { AddDeveloper } from '../../models/addDeveloper.mode';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-developer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-developer.component.html',
  styleUrl: './edit-developer.component.css',
})
export class EditDeveloperComponent {
  @Input({ required: true }) dev?: Developer;
  @Output() cancel = new EventEmitter<void>();
  @Output() edit = new EventEmitter<AddDeveloper>();

  enteredDevName = this.dev?.name!;
  enteredDevBudget = this.dev?.budget!;

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.edit.emit({
      id: this.dev?.id,
      name: this.enteredDevName,
      budget: this.enteredDevBudget,
    });
  }
}
