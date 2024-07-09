import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, merge } from 'rxjs';
import { StandardSideEngine } from '../starship/parts/sideEngine/createdSideEngines';
import { Hull } from '../starship/parts/hull/hull';
import { StarshipPart } from '../starship/parts/abstract.shipPart';

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

  private selectedPart$: Subject<StarshipPart> = new Subject();
  partSelectionEvent$: Observable<StarshipPart> =
    this.selectedPart$.asObservable();

  // do more than one observable, one for element selection events, one for other events
  creatorServiceEvents$: Observable<any> = merge(
    this.hullSelectionEvent$,
    this.sideEnginesSelectionEvent$,
    this.partSelectionEvent$
  );

  moveSideEngine(y: number, z: number) {
    this.sideEnginePosition$.next({ y: y, z: z });
  }

  //   probably obsolete?
  addHull(hull: Hull) {
    this.selectedHull$.next(hull);
  }

  addSideEngines() {
    this.selectedSideEngines$.next(StandardSideEngine);
  }
  addMainEngine() {
    console.log('main engine added');
  }
  // --------------

  addPart(part: StarshipPart) {
    this.selectedPart$.next(part);
  }
  //   maybe instead multiple addSomething methods and observables, create one generic method like addPart, and observable,
  //  and next it with part
}
