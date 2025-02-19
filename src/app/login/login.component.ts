import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


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
  constructor(private router: Router) {}
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
      localStorage.setItem('access_token', 'your-token-value');
      this.router.navigate(['pages/dashboard']);
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}
