import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, merge } from 'rxjs';
import { StandardHull } from '../starship/parts/hull/createdHulls';
import { StandardSideEngine } from '../starship/parts/sideEngine/createdSideEngines';
import { Hull } from '../starship/parts/hull/hull';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  private sideEnginePosition$: BehaviorSubject<{ y: number; z: number }> =
    new BehaviorSubject({ y: 0, z: 0 });

  moveSideEngineEvent$: Observable<{ y: number; z: number }> =
    this.sideEnginePosition$.asObservable();

  private selectedHull$: Subject<any> = new Subject();
  hullSelectionEvent$: Observable<any> = this.selectedHull$.asObservable();

  private selectedSideEngines$: Subject<any> = new Subject();
  sideEnginesSelectionEvent$: Observable<any> =
    this.selectedSideEngines$.asObservable();

  // do more than one observable, one for element selection events, one for other events
  creatorServiceEvents$: Observable<any> = merge(
    this.hullSelectionEvent$,
    this.sideEnginesSelectionEvent$
  );

  moveSideEngine(y: number, z: number) {
    this.sideEnginePosition$.next({ y: y, z: z });
  }

  addHull(hull: Hull) {
    this.selectedHull$.next(hull);
  }

  addSideEngines() {
    this.selectedSideEngines$.next(StandardSideEngine);
  }
  addMainEngine() {
    console.log('main engine added');
  }
}
