import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface LoginData {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  items: string[] = ['Apple', 'Banana', 'Orange','mf' ,'mf', 'mf'];
  loginData: LoginData = {
    username: '',
    password: ''
  };
  loginError: string | null = null;

  onSubmit() {
    if (
      this.loginData.username === 'admin' &&
      this.loginData.password === 'password123'
    ) {
      this.loginError = null;
      alert('Login successful!');
      // Redirect to another page or dashboard (example)
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}
