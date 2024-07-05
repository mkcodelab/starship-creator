import * as THREE from 'three';
import { ScreenSize } from '../engine/engine.service';
import { StarshipModel } from '../starship/starship';
import { Lights } from '../lights/lights';

import { Injectable, inject } from '@angular/core';
import { CreatorService } from '../creator/creator.service';
import { Hull } from '../starship/parts/hull/hull';
import { MainEngine } from '../starship/parts/mainEngine/mainEngine';
import { SideEngines } from '../starship/parts/sideEngine/sideEngine';
import { StarshipPart } from '../starship/parts/abstract.shipPart';

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
    this.camera.position.set(2, 2, 2);
    this.scene.add(this.camera);

    const axesHelper = new THREE.AxesHelper(10);
    this.scene.add(axesHelper);

    this.createSkybox();

    this.lights = new Lights();
    this.scene.add(this.lights.lightsGroup);

    this.createBasePlate();

    // adding starship
    this.addStarship();

    // here we will subscribe to the creator.service events
    this.creatorSvc.moveSideEngineEvent$.subscribe((data) => {
      this.starshipModel.moveSideEngines(data.y, data.z);
    });

    this.creatorSvc.creatorServiceEvents$.subscribe((part) => {
      this.starshipModel.addPart(part);
    });
  }

  resize() {
    this.camera.aspect = ScreenSize.aspect;
    this.camera.updateProjectionMatrix();
  }

  addStarship() {
    this.starshipModel = new StarshipModel();
    this.scene.add(this.starshipModel.group);
    // move whole ship a bit higher
    this.starshipModel.group.position.y = 1;
  }

  update() {
    // showcase rotation
    if (this.cubeRotation) {
      //   this.cube.rotation.z += 0.1;
      //   this.basePlate.rotation.y += 0.01;
    }
  }

  moveSpotlight(value: number) {
    this.lights.moveSpotlight(value);
  }

  createBasePlate() {
    const basePlateGeometry = new THREE.CylinderGeometry(5, 5.5, 0.2);
    const basePlateMaterial = new THREE.MeshPhongMaterial({ color: 0xababab });
    this.basePlate = new THREE.Mesh(basePlateGeometry, basePlateMaterial);
    this.basePlate.receiveShadow = true;
    this.scene.add(this.basePlate);
  }

  createSkybox() {
    const loader = new THREE.CubeTextureLoader();
    loader.setPath('assets/textures/skybox/');

    const textureCube = loader.load([
      'arid2_ft.jpg',
      'arid2_bk.jpg',

      'arid2_up.jpg',
      'arid2_dn.jpg',

      'arid2_rt.jpg',
      'arid2_lf.jpg',
    ]);

    this.scene.background = textureCube;
    // we can use it to add envMap to MeshBasicMaterials
  }

  createTestTexturePlane(texture: any, x: number, y: number, z: number) {
    const geom = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
    });

    const mesh = new THREE.Mesh(geom, material);
    mesh.position.set(x, y, z);
    this.scene.add(mesh);
  }
}
