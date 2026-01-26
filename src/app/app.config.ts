import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router'; // <--- Import withHashLocation
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // ✅ UPDATED: Added withHashLocation()
    provideRouter(routes, withHashLocation()), 
    provideHttpClient(),
    provideAnimationsAsync()
  ]
};