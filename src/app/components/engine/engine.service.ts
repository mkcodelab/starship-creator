import {
  ElementRef,
  Injectable,
  NgZone,
  OnDestroy,
  inject,
} from '@angular/core';
import * as THREE from 'three';
// import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MainScene } from '../../3d/main-scene/main-scene';

// figure out how to get dynamic component size
export const ScreenSize = {
  width: 1000,
  height: 800,
  get aspect(): number {
    return this.width / this.height;
  },
};

@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  //   private mainScene: MainScene;
  private mainScene = inject(MainScene);

  //   private arcBallControls: ArcballControls;
  private orbitControls: OrbitControls;

  public cubeRotation = true;

  private frameId: number = 0;

  private ngZone = inject(NgZone);

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.renderer != null) {
      this.renderer.dispose();
      //   this.renderer = null;
      //   this.canvas = null;
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.setSize(ScreenSize.width, ScreenSize.height);

    this.renderer.setClearColor(0xbdac7e);

    // create the scene
    // this.mainScene = new MainScene();

    this.initOrbitControls();
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.mainScene.update();
    this.renderer.render(this.mainScene.scene, this.mainScene.camera);
  }

  public resize(): void {
    this.mainScene.resize();
    this.renderer.setSize(ScreenSize.width, ScreenSize.height);
  }

  //   initArcballControls() {
  //     this.arcBallControls = new ArcballControls(
  //       this.camera,
  //       this.canvas,
  //       this.scene
  //     );
  //   }

  initOrbitControls() {
    this.orbitControls = new OrbitControls(this.mainScene.camera, this.canvas);
  }

  moveSpotlight(value: number) {
    this.mainScene.moveSpotlight(value);
  }
}
