import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css'
})
export class FormFieldsComponent<T> {
  @ViewChild('inputField') inputField!: NgModel;// this here tells the compiler ! that this will be assigned an ng model value before accessing
  @ViewChild('selectField') selectField!: NgModel;
  
  @Input() options: { label: string; value: number }[] | undefined = [];
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() value: T | null = null;
  @Output() valueChange = new EventEmitter<T>();

  showPassword = false;

  onInputChange(value: any) {
    this.value = value;
    this.valueChange.emit(value);
  }
  

  get field(): NgModel {
    return this.type === 'select' ? this.selectField : this.inputField;
  }
}
