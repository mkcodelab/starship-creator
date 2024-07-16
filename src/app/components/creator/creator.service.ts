import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, merge } from 'rxjs';
import { HullsArray } from '../../3d/starship/parts/hull/createdHulls';
import { SideEnginesArray } from '../../3d/starship/parts/sideEngine/createdSideEngines';
import { MainEnginesArray } from '../../3d/starship/parts/mainEngine/createdMainEngines';
import { Hull } from '../../3d/starship/parts/hull/hull';
import { MainEngine } from '../../3d/starship/parts/mainEngine/mainEngine';
import { SideEngines } from '../../3d/starship/parts/sideEngine/sideEngine';
import { StarshipPart } from '../../3d/starship/parts/abstract.shipPart';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  isHullAdded = false;

  hulls = HullsArray;
  sideEngines = SideEnginesArray;
  mainEngines = MainEnginesArray;

  selectedHull: Hull | undefined;
  selectedMainEngine: MainEngine | undefined;
  selectedSideEngines: SideEngines | undefined;

  private sideEnginePosition$: BehaviorSubject<{ y: number; z: number }> =
    new BehaviorSubject({ y: 0, z: 0 });

  moveSideEngineEvent$: Observable<{ y: number; z: number }> =
    this.sideEnginePosition$.asObservable();

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
    // move to service
    if (part instanceof Hull) {
      this.isHullAdded = true;
    }
    this.selectedPart$.next(part);
  }

  selectPart(part: StarshipPart) {
    switch (true) {
      case part instanceof Hull:
        this.selectedHull = part;
        break;
      case part instanceof MainEngine:
        this.selectedMainEngine = part;
        break;
      case part instanceof SideEngines:
        this.selectedSideEngines = part;
        break;
      default:
        console.warn('not a part');
    }
  }

  //   boolean for displaying 'part-selected' class
  isPartSelected(part: StarshipPart): boolean {
    switch (true) {
      case part instanceof Hull:
        return this.selectedHull === part;
      case part instanceof MainEngine:
        return this.selectedMainEngine === part;
      case part instanceof SideEngines:
        return this.selectedSideEngines === part;

      default:
        return false;
    }
  }
}
