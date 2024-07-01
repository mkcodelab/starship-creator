import * as THREE from 'three';
import { ScreenSize } from '../engine/engine.service';
export class MainScene {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, ScreenSize.aspect, 0.1, 1000);

  constructor() {
    this.camera.position.set(5, 5, 5);
  }

  resize() {
    this.camera.aspect = ScreenSize.aspect;
    this.camera.updateProjectionMatrix();
  }
}
