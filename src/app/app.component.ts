import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProfilePicComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
