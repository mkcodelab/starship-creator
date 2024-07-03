import { Component, TemplateRef, inject } from '@angular/core';
import { EngineComponent } from '../engine/engine.component';
import { EngineService } from '../engine/engine.service';
import { CreatorService } from './creator.service';
import { ModalConfig, ModalService } from '../../services/modal.service';
import { HullsArray } from '../starship/parts/hull/createdHulls';
import { Hull } from '../starship/parts/hull/hull';

@Component({
  standalone: true,
  selector: 'creator',
  templateUrl: './creator.component.html',
  imports: [EngineComponent],
})
export class CreatorComponent {
  creatorSvc = inject(CreatorService);
  engineSvc = inject(EngineService);
  modalSvc = inject(ModalService);

  hulls = HullsArray;

  selectedHull: Hull | undefined;

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

  selectHull(hull: Hull) {
    this.selectedHull = hull;
    console.log('hull selected', this.selectedHull);
  }

  openModal(template: TemplateRef<any>, config: ModalConfig) {
    this.modalSvc.open(template, config);
  }
}
