import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { scientistsActionsAPI } from './actions/scientists.actions';
import { ScientistsService } from '../scientists.service';
import { scientistsPageActions } from './actions/scientists-page.actions';

export const loadScientists = createEffect(
  (
    actions$ = inject(Actions),
    scientistsService = inject(ScientistsService)
  ) => {
    return actions$.pipe(
      ofType(scientistsPageActions.load),
      concatMap(() =>
        scientistsService.scientists$.pipe(
          map((scientists) =>
            scientistsActionsAPI.loadScientistsSuccess({ scientists })
          ),
          catchError((error) =>
            of(scientistsActionsAPI.loadScientistsFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);
