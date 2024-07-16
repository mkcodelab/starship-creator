import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

export interface SideEngineConfig extends ShipPartConfig {
  geom: THREE.BufferGeometry;
  material: THREE.Material;
  speedModifier?: number;
}

export class SideEngines extends StarshipPart {
  geom: THREE.BufferGeometry;

  mass = 50;

  material: THREE.Material;

  mesh: THREE.Mesh;

  constructor(sideEnginesConfig: SideEngineConfig) {
    super(sideEnginesConfig);

    this.geom = sideEnginesConfig.geom;
    this.material = sideEnginesConfig.material;
    this.mesh = new THREE.Mesh(this.geom, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }
}
