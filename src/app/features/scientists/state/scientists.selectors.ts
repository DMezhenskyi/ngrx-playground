import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromScientists from './scientists.reducer';

export const selectScientistState = createFeatureSelector<fromScientists.State>(
  fromScientists.scientistsFeatureKey
);

export const selectScientists = createSelector(
  selectScientistState,
  (state) => state.scientists
);

export const selectIsLoading = createSelector(
  selectScientistState,
  (state) => state.isLoading
);

export const selectSelectedId = createSelector(
  selectScientistState,
  (state) => state.selectedId
);

export const selectSelectedScientist = createSelector(
  selectSelectedId,
  selectScientists,
  (selectedId, scientists) => scientists.find((s) => s.id === selectedId)
);
