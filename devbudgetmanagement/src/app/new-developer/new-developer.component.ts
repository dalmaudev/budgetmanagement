import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type AddDeveloper } from '../../models/addDeveloper.mode';

@Component({
  selector: 'app-new-developer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-developer.component.html',
  styleUrl: './new-developer.component.css',
})
export class NewDeveloperComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<AddDeveloper>();

  enteredDevName = '';
  enteredDevBudget = 0;

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({ name: this.enteredDevName, budget: this.enteredDevBudget });
  }
}
