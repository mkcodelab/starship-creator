import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

export interface SideEngineConfig extends ShipPartConfig {
  geom: THREE.BufferGeometry;
}

export class SideEngines extends StarshipPart {
  geom: THREE.BufferGeometry;

  mass = 50;

  material = new THREE.MeshPhongMaterial({
    color: 0xeeeeee,
  });

  mesh: THREE.Mesh;

  constructor(sideEnginesConfig: SideEngineConfig) {
    super(sideEnginesConfig);

    this.geom = sideEnginesConfig.geom;
    this.mesh = new THREE.Mesh(this.geom, this.material);
  }
}
