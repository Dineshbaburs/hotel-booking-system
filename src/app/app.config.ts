import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <--- REQUIRED
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // <--- REQUIRED

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),      // <--- Enables connection to your mock database
    provideAnimationsAsync()  // <--- Enables Angular Material animations
  ]
};