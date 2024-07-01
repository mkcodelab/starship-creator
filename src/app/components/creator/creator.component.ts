import { Component, inject } from '@angular/core';
import { EngineComponent } from '../engine/engine.component';
import { EngineService } from '../engine/engine.service';

@Component({
  standalone: true,
  selector: 'creator',
  templateUrl: './creator.component.html',
  imports: [EngineComponent],
})
export class CreatorComponent {
  engineSvc = inject(EngineService);

  toggleAnim() {
    this.engineSvc.cubeRotation = !this.engineSvc.cubeRotation;
  }

  moveSpotlight(value: number) {
    this.engineSvc.moveSpotlight(value);
  }
}
