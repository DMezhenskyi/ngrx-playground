import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { scientistsPageActions } from '../state/actions/scientists-page.actions';
import { scientistFeature } from '../state/scientists.state';
import { Scientist } from '../scientists.model';

@Component({
  selector: 'app-scientists',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    NgClass,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.scss'],
})
export class ScientistsComponent {
  store = inject(Store);

  scientists$ = this.store.select(scientistFeature.selectScientists);
  selectedScientist$ = this.store.select(
    scientistFeature.selectSelectedScientist
  );
  isLoading$ = this.store.select(scientistFeature.selectIsLoading);

  ngOnInit() {
    this.store.dispatch(scientistsPageActions.load());
  }

  selectScientist(scientist: Scientist) {
    this.store.dispatch(scientistsPageActions.select(scientist));
  }
}
