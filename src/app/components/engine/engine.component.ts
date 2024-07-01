import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'engine',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    #renderCanvas {
        border: 1px solid #666;
    }
  `,
  template: `
    <div class="engine-wrapper w-full h-full">
      <canvas #rendererCanvas id="renderCanvas"></canvas>
    </div>
  `,
})
export class EngineComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public engineSvc = inject(EngineService);

  public ngOnInit(): void {
    this.engineSvc.createScene(this.rendererCanvas);
    this.engineSvc.animate();
  }
}
