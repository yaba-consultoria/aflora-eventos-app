import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';



import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { environment } from '../environments/environments';
import { initializeApp } from 'firebase/app';


// Inicializa o Firebase diretamente no app.config.ts
const firebaseApp = initializeApp(environment.firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNgxMask()
  ],
};
export { firebaseApp }; // Exporta a instância do Firebase para ser usada em outros arquivos