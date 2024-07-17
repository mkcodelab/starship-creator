import { Component, TemplateRef, inject } from '@angular/core';
import { EngineComponent } from '../engine/engine.component';
import { EngineService } from '../engine/engine.service';
import { CreatorService } from './creator.service';
import { ModalConfig, ModalService } from '../../services/modal.service';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { StarshipPart } from '../../3d/starship/parts/abstract.shipPart';

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

  moveSpotlight(value: number) {
    // move to creatorSvc
    // this.engineSvc.moveSpotlight(value);
  }

  moveSideEngine(y: number, z: number) {
    this.creatorSvc.moveSideEngine(y, z);
  }

  addPart(part: StarshipPart) {
    this.creatorSvc.addPart(part);
    this.modalSvc.close();
  }

  selectPart(part: StarshipPart) {
    this.creatorSvc.selectPart(part);
  }

  openModal(template: TemplateRef<any>, config: ModalConfig) {
    this.modalSvc.open(template, config);
  }

  isPartSelected(part: StarshipPart) {
    return this.creatorSvc.isPartSelected(part);
  }
  get isHullAdded() {
    return this.creatorSvc.isHullAdded;
  }

  get hulls() {
    return this.creatorSvc.hulls;
  }

  get mainEngines() {
    return this.creatorSvc.mainEngines;
  }

  get sideEngines() {
    return this.creatorSvc.sideEngines;
  }

  get selectedHull() {
    return this.creatorSvc.selectedHull;
  }
  get selectedMainEngine() {
    return this.creatorSvc.selectedMainEngine;
  }
  get selectedSideEngines() {
    return this.creatorSvc.selectedSideEngines;
  }

  get totalMass() {
    return this.creatorSvc.totalShipMass;
  }
}
