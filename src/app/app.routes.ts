import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { LayoutComponent } from './pages/layout/layout.component';

const pagesRoutes: Routes = [
  {
    path: 'pages',
    canActivate: [authGuard],
    component: LayoutComponent,
    children: [
      // Add all your page routes here
      // Example:
      // { path: 'user-profile', component: UserProfileComponent },
      // { path: 'settings', component: SettingsComponent },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    ]
  }
];
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  ...pagesRoutes,
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Catch all route for undefined paths
];
