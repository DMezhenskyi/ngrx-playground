import { createActionGroup, props } from '@ngrx/store';
import { Scientist } from '../../scientists.model';

export const scientistsActionsAPI = createActionGroup({
  source: 'Scientists API',
  events: {
    'Load Scientists Success': props<{ scientists: Scientist[] }>(),
    'Load Scientists Failure': props<{ error: string }>(),
  },
});
