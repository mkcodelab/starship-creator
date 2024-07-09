import { Component, TemplateRef, inject } from '@angular/core';
import { EngineComponent } from '../engine/engine.component';
import { EngineService } from '../engine/engine.service';
import { CreatorService } from './creator.service';
import { ModalConfig, ModalService } from '../../services/modal.service';
import { HullsArray } from '../starship/parts/hull/createdHulls';
import { Hull } from '../starship/parts/hull/hull';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { SideEnginesArray } from '../starship/parts/sideEngine/createdSideEngines';
import { MainEnginesArray } from '../starship/parts/mainEngine/createdMainEngines';
import { Subscription } from 'rxjs';
import { StarshipPart } from '../starship/parts/abstract.shipPart';
import { MainEngine } from '../starship/parts/mainEngine/mainEngine';
import { SideEngines } from '../starship/parts/sideEngine/sideEngine';

@Component({
  standalone: true,
  selector: 'creator',
  templateUrl: './creator.component.html',
  imports: [EngineComponent, NgClass, NgTemplateOutlet],
  styles: `
    $outline-col: hsl(80, 50%, 50%);

    .part-selected {
        box-shadow: 0 0 5px 5px $outline-col;

    }
  `,
})
export class CreatorComponent {
  creatorSvc = inject(CreatorService);
  engineSvc = inject(EngineService);
  modalSvc = inject(ModalService);

  //   move to creatorService???
  hulls = HullsArray;
  sideEngines = SideEnginesArray;
  mainEngines = MainEnginesArray;

  //   move to creatorService
  selectedHull: Hull | undefined;
  selectedMainEngine: MainEngine | undefined;
  selectedSideEngines: SideEngines | undefined;

  isHullAdded = false;
  private hullAdded: Subscription;

  ngOnInit() {
    this.hullAdded = this.creatorSvc.hullSelectionEvent$.subscribe(() => {
      this.isHullAdded = true;
    });
  }

  moveSpotlight(value: number) {
    this.engineSvc.moveSpotlight(value);
  }

  moveSideEngine(y: number, z: number) {
    this.creatorSvc.moveSideEngine(y, z);
  }

  addHull() {
    if (this.selectedHull) {
      this.creatorSvc.addHull(this.selectedHull);
      this.modalSvc.close();
    } else {
      console.warn('hull not selected');
    }
  }

  addSideEngines() {
    this.creatorSvc.addSideEngines();
    this.modalSvc.close();
  }

  addMainEngine() {
    // this.creatorSvc.addMainEngine();
    if (this.selectedMainEngine) {
      console.log('main engine added');
      this.creatorSvc.addPart(this.selectedMainEngine);
      this.modalSvc.close();
    }
    // console.log('addMainEngine', part);
  }

  addPart(part: StarshipPart) {
    // if part is selected and not undefined
    this.creatorSvc.addPart(part);
    this.modalSvc.close();
  }

  selectHull(hull: Hull) {
    this.selectedHull = hull;
    console.log('hull selected', this.selectedHull);
  }

  //   move to creatorService
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

  openModal(template: TemplateRef<any>, config: ModalConfig) {
    this.modalSvc.open(template, config);
  }

  //   boolean for displaying 'part-selected' class
  isHullSelected(hull: Hull) {
    return this.selectedHull === hull;
  }

  isPartSelected(part: StarshipPart) {
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

  ngOnDestroy() {
    this.hullAdded.unsubscribe();
  }
}
