import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { scientistsActionsAPI } from './actions/scientists.actions';
import { scientistsPageActions } from './actions/scientists-page.actions';
import { Scientist } from '../scientists.model';

export interface State {
  scientists: Scientist[];
  isLoading: boolean;
  selectedId: number | null;
}

export const initialState: State = {
  scientists: [],
  isLoading: false,
  selectedId: null,
};

const reducer = createReducer(
  initialState,
  on(scientistsPageActions.load, (state) => ({ ...state, isLoading: true })),
  on(scientistsPageActions.select, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  on(scientistsActionsAPI.loadScientistsSuccess, (state, { scientists }) => ({
    ...state,
    scientists,
    isLoading: false,
  })),
  on(scientistsActionsAPI.loadScientistsFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);
export const scientistFeature = createFeature({
  name: 'scientistsFeature',
  reducer,
  extraSelectors: ({ selectSelectedId, selectScientists }) => ({
    selectSelectedScientist: createSelector(
      selectSelectedId,
      selectScientists,
      (selectedId, scientists) => scientists.find((s) => s.id === selectedId)
    )
  })
})
