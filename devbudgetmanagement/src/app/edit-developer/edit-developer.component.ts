import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class EditDeveloperComponent implements OnInit {
  @Input({ required: true }) dev?: Developer;
  @Output() cancel = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Developer>();

  enteredDevName!: string;
  enteredDevBudget!: number;

  ngOnInit() {
    this.enteredDevName = this.dev?.name!;
    this.enteredDevBudget = this.dev?.budget!;
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    const updatedDev: Developer = {
      ...this.dev!,
      name: this.enteredDevName,
      budget: this.enteredDevBudget,
    };

    this.edit.emit(updatedDev);
  }
}
