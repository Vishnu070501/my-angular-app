import { ApplicationConfig,  provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// importProvidersFrom, angular/core
import { routes } from './app.routes';
// import { FormsModule } from '@angular/forms';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    // importProvidersFrom(FormsModule) // ✅ Add this line
  ]
};
