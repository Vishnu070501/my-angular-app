import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
  // For server-side rendering, allow the route
  return true;
};
