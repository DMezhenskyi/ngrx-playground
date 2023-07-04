import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import * as scientistsEffects from './features/scientists/state/scientists.effects';
import * as fromScientists from './features/scientists/state/scientists.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState(
      fromScientists.scientistsFeatureKey,
      fromScientists.reducer
    ),
    provideEffects(scientistsEffects),
    provideAnimations()
  ],
};
