import * as THREE from 'three';
import { ScreenSize } from '../engine/engine.service';
import { StarshipModel } from '../starship/starship';
import { Lights } from '../lights/lights';
import {
  ImprovedHull,
  StandardHull,
} from '../starship/parts/hull/createdHulls';
import { StandardMainEngine } from '../starship/parts/mainEngine/createdMainEngines';
import { StandardSideEngine } from '../starship/parts/sideEngine/createdSideEngines';
import { Injectable, inject } from '@angular/core';
import { CreatorService } from '../creator/creator.service';

// maybe make it as singleton?
@Injectable({
  providedIn: 'root',
})
export class MainScene {
  scene = new THREE.Scene();

  lights: Lights;

  private basePlate: THREE.Mesh;

  cubeRotation = true;

  camera = new THREE.PerspectiveCamera(75, ScreenSize.aspect, 0.1, 1000);

  starshipModel: StarshipModel;

  creatorSvc = inject(CreatorService);

  constructor() {
    this.camera.position.set(5, 5, 5);
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

    // here we will subscribe to the creator.service events
    this.creatorSvc.moveSideEngineEvent$.subscribe((data) => {
      this.starshipModel.moveSideEngines(data.y, data.z);
    });
  }

  resize() {
    this.camera.aspect = ScreenSize.aspect;
    this.camera.updateProjectionMatrix();
  }

  addStarship() {
    this.starshipModel = new StarshipModel();
    this.starshipModel.addHull(StandardHull);
    // this.starshipModel.addHull(ImprovedHull);
    this.starshipModel.addMainEngine(StandardMainEngine);
    this.starshipModel.addSideEngines(StandardSideEngine);
    this.scene.add(this.starshipModel.group);
    // move whole ship a bit higher
    this.starshipModel.group.position.y = 1;
  }

  update() {
    // showcase rotation
    if (this.cubeRotation) {
      //   this.cube.rotation.z += 0.1;
      this.basePlate.rotation.y += 0.01;
    }

    // this.starshipModel.group.rotation.y -= 0.01;
  }

  moveSpotlight(value: number) {
    this.lights.moveSpotlight(value);
  }
}
