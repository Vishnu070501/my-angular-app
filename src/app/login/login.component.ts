import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

interface LoginResponse {
  success: boolean;
  status: number;
  data: LoginResponseData;
}

interface LoginResponseData {
  user: {
    email: string;
    name: string;
  };
  tokens: {
    access: string;
    refresh: string;
  };
  is_verified: boolean;
}

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: LoginData = {
    email: '',
    password: ''
  };
  
  loginError: string | null = null;
  items: string[] = ['Apple', 'Banana', 'Orange', 'mf', 'mf', 'mf'];

  constructor(
    private router: Router,
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

 // In your onSubmit method:
async onSubmit() {
  try {
    const response: any = await this.dataService.postData('auth/signin/', this.loginData);
    
    if (response.success && isPlatformBrowser(this.platformId)) {
      this.loginError = null;
      localStorage.setItem('access_token', response.data.tokens.access);
      localStorage.setItem('refresh_token', response.data.tokens.refresh);
      localStorage.setItem('user_name', response.data.user.name);
      console.log(response);
      await this.router.navigate(['pages/dashboard']);
    }
  } catch (error) {
    this.loginError = 'check console';
    console.error(error);
  }
}
  }

