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

  moveSpotlight(value: number) {
    this.engineSvc.moveSpotlight(value);
  }

  moveSideEngine(y: number, z: number) {
    this.creatorSvc.moveSideEngine(y, z);
  }

  addPart(part: StarshipPart) {
    // if part is selected and not undefined
    if (part instanceof Hull) {
      this.creatorSvc.isHullAdded = true;
    }
    this.creatorSvc.addPart(part);
    this.modalSvc.close();
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

  //   boolean for displaying 'part-selected' class
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
  get isHullAdded() {
    return this.creatorSvc.isHullAdded;
  }
}
