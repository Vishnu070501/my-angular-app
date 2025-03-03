import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormFieldsComponent } from '../form-fields/form-fields.component';
interface option {
  label: string;
  value: number;
}
interface field{
  label: string;
  type: string;
  id: string;
  name: string;
  required: boolean;
  property: keyof task;
  options?: option[];
}
interface task{
  name:string
}
@Component({
  selector: 'app-task-modal',
  imports: [
    CommonModule,
    FormFieldsComponent,
  ],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  handleCloseModal = () => {
    console.log('close modal');
    this.closeModal.emit();
  }
  fields: field[] = [
    {
      label: 'Task Name',
      type: 'text',
      id: 'taskName',
      name: 'taskName',
      required: true,
      property: 'name',
    }
  ]
  task: task = {
    name: ''
  }
}
