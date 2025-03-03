import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormFieldsComponent } from "../components/form-fields/form-fields.component";
interface option {
  label: string;
  value: number;
}
interface FormField {
  label: string;
  type: string;
  id: string;
  name: string;
  required: boolean;
  property: keyof LoginData;
  options?: option[];
}

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
  userType: string;
}

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
    FormFieldsComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formValid: boolean = false;
  isHovered: boolean = false;
  isIndicatorClicked: boolean = false;

   handleClick = () => {
    console.log(this.isIndicatorClicked);
    this.isIndicatorClicked = !this.isIndicatorClicked;
  }

  loginData: LoginData = {
    email: '',
    password: '',
    userType: '',
  };
  // Update formFields array to include dropdown
formFields: FormField[] = [
  {
    label: 'Username',
    type: 'text',
    id: 'username',
    name: 'username',
    required: true,
    property: 'email'
  },
  {
    label: 'Password',
    type: 'password',
    id: 'password',
    name: 'password',
    required: true,
    property: 'password'
  },
  {
    label: 'User Type',
    type: 'select',
    id: 'userType',
    name: 'userType',
    required: true,
    property: 'userType',
    options: [
      { label: 'Admin', value: 1 },
      { label: 'User', value: 2 },
      { label: 'Guest', value: 3 }
    ]
  }
];
  loginError: string | null = null;
  items: string[] = ['Apple', 'Banana', 'Orange', 'mf', 'mf', 'mf'];

  constructor(
    private router: Router,
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  updateFormValidity(fieldName: string, value: any) {
    // Update the specific field in loginData
    this.loginData[fieldName as keyof LoginData] = value;
  
    // Validate all fields
    this.formValid = this.formFields.every(field => {
      const fieldValue = this.loginData[field.property];
      return fieldValue !== '' && fieldValue !== null && fieldValue !== undefined;
    });
  }
  
  handleMouse = (hovered: boolean) => {
    this.isHovered = hovered;
  }
  getBackgroundColor(): string {
    if (this.isHovered) return 'blue';
    if (!this.loginData.email) return 'red';
    return this.loginData.email.length > 5 ? 'green' : 'red';
  }
 // In your onSubmit method:
async onSubmit() {
  try {
    console.log('submit');
    const response: any = await this.dataService.postData('accounts/sign-in/', this.loginData);
    console.log(response);
    if (response.success && isPlatformBrowser(this.platformId)) {
      this.loginError = null;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('user_name', response.data.user.name);
      console.log(response);
      await this.router.navigate(['pages/dashboard']);
    }
  } catch (error:any) {
    this.loginError = 'check console';
    console.error(error);
  }
}
  }

