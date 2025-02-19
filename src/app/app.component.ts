import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { AxiosConfig } from './config/axios-config';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // ProfilePicComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  ngOnInit() {
    // Initialize axios configuration
    AxiosConfig.initialize();
  }
}
