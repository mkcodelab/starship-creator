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

  hulls = HullsArray;
  sideEngines = SideEnginesArray;
  mainEngines = MainEnginesArray;

  selectedHull: Hull | undefined;
  //   add some prevent mechanism from adding multiple hulls.
  // there can be only one hull

  toggleAnim() {
    this.engineSvc.cubeRotation = !this.engineSvc.cubeRotation;
  }

  moveSpotlight(value: number) {
    this.engineSvc.moveSpotlight(value);
  }

  moveSideEngine(y: number, z: number) {
    this.creatorSvc.moveSideEngine(y, z);
  }

  addHull() {
    console.log('test add');
    console.log(this);
    if (this.selectedHull) {
      this.creatorSvc.addHull(this.selectedHull);
      this.modalSvc.close();
    } else {
      console.warn('hull not selected');
    }
  }

  addSideEngines() {
    this.creatorSvc.addSideEngines();
  }

  addMainEngine() {
    // this.creatorSvc.addMainEngine();
    console.log('main engine added');
  }

  selectHull(hull: Hull) {
    this.selectedHull = hull;
    console.log('hull selected', this.selectedHull);
  }

  openModal(template: TemplateRef<any>, config: ModalConfig) {
    this.modalSvc.open(template, config);
  }

  isHullSelected(hull: Hull) {
    return this.selectedHull === hull;
  }
}
