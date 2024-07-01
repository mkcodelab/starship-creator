import {
  ElementRef,
  Injectable,
  NgZone,
  OnDestroy,
  inject,
} from '@angular/core';
import * as THREE from 'three';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { StarshipModel } from '../starship/starship';
import { Lights } from '../lights/lights';
import { MainScene } from '../main-scene/main-scene';

export const ScreenSize = {
  width: 800,
  height: 600,
  get aspect(): number {
    return this.width / this.height;
  },
};

@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;

  private mainScene: MainScene;

  private lights: Lights;

  private arcBallControls: ArcballControls;
  private orbitControls: OrbitControls;

  private basePlate: THREE.Mesh;

  public cubeRotation = true;

  private frameId: number = 0;

  private ngZone = inject(NgZone);

  width = 800;
  height = 600;

  get aspect() {
    return this.width / this.height;
  }

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
      alpha: true, // transparent background
      antialias: true, // smooth edges
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x666666);

    // create the scene
    this.mainScene = new MainScene();

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, this.aspect, 0.1, 1000);
    this.camera.position.set(5, 5, 5);

    // this.initArcballControls();
    this.initOrbitControls();

    this.scene.add(this.camera);

    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

    this.lights = new Lights();
    this.scene.add(this.lights.lightsGroup);

    const basePlateGeometry = new THREE.BoxGeometry(5, 0.1, 5);
    const basePlateMaterial = new THREE.MeshPhongMaterial({ color: 0xababab });
    this.basePlate = new THREE.Mesh(basePlateGeometry, basePlateMaterial);
    this.scene.add(this.basePlate);

    // adding starship
    this.addStarship();
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
    this.update();
    this.renderer.render(this.scene, this.camera);
    // this.renderer.render(this.mainScene.scene, this.mainScene.camera);
  }

  public update(): void {
    if (this.cubeRotation) {
      //   this.cube.rotation.z += 0.1;
      this.basePlate.rotation.y += 0.01;
    }
  }

  public resize(): void {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    // this.mainScene.resize();
    this.renderer.setSize(ScreenSize.width, ScreenSize.height);
  }

  initArcballControls() {
    this.arcBallControls = new ArcballControls(
      this.camera,
      this.canvas,
      this.scene
    );
  }

  initOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.canvas);
    // this.orbitControls = new OrbitControls(this.mainScene.camera, this.canvas);
  }

  moveSpotlight(value: number) {
    this.lights.moveSpotlight(value);
  }

  addStarship() {
    const starship = new StarshipModel();
    starship.createTestHull();
    starship.addMainEngine();
    this.scene.add(starship.group);
    starship.group.position.y = 1;
  }
}
