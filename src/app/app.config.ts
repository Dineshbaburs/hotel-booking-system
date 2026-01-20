import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <--- Required for Data
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // <--- Required for UI

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),      // <--- Enables database connection
    provideAnimationsAsync()  // <--- Enables Material Design
  ]
};