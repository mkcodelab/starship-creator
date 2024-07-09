import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, merge } from 'rxjs';
import { StarshipPart } from '../starship/parts/abstract.shipPart';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  isHullAdded = false;

  private sideEnginePosition$: BehaviorSubject<{ y: number; z: number }> =
    new BehaviorSubject({ y: 0, z: 0 });

  moveSideEngineEvent$: Observable<{ y: number; z: number }> =
    this.sideEnginePosition$.asObservable();

  //   // used for setting isHullAdded flag?
  //   private selectedHull$: Subject<any> = new Subject();
  //   hullSelectionEvent$: Observable<any> = this.selectedHull$.asObservable();

  private selectedPart$: Subject<StarshipPart> = new Subject();
  partSelectionEvent$: Observable<StarshipPart> =
    this.selectedPart$.asObservable();

  // do more than one observable, one for element selection events, one for other events
  creatorServiceEvents$: Observable<any> = merge(
    // this.hullSelectionEvent$,
    // this.sideEnginesSelectionEvent$,
    this.partSelectionEvent$
  );

  moveSideEngine(y: number, z: number) {
    this.sideEnginePosition$.next({ y: y, z: z });
  }

  addPart(part: StarshipPart) {
    this.selectedPart$.next(part);
  }
}
