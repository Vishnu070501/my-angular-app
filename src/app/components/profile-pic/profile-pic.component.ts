import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';    // ✅ Import FormsModule


@Component({
  selector: 'app-profile-pic',
  // standalone: true,  // ✅ Make this a standalone component
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css'],
  imports: [CommonModule, FormsModule]  // ✅ Import CommonModule and FormsModule for ngModel
})
export class ProfilePicComponent {
  inputValue: number = 0;
  result: number | null = null;

  onSubmit() {
    this.result = this.inputValue + 2;
  }
}
