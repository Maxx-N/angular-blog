import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';

import { routes } from './app.routes';
import { AppPreset } from './app-preset';
import { PRIMEUI_LICENSE } from './primeui-license';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    providePrimeNG({
      theme: {
        preset: AppPreset,
        options: { darkModeSelector: false },
      },
      license: PRIMEUI_LICENSE,
    }),
    MessageService,
  ],
};
