import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

export interface HullConfig extends ShipPartConfig {
  hpModifier: number;
  geom: THREE.BufferGeometry;
  material: THREE.Material;
}

export class Hull extends StarshipPart {
  geom: THREE.BufferGeometry;

  material: THREE.Material;
  mesh: THREE.Mesh;

  mass = 200;

  //   attach points, i guess we need to define them separately for every hull created...
  mainEngineAttachPoint = new THREE.Vector3(0, 0, -2);

  sideEngineAttachPoint = new THREE.Vector3(0, 0, -1);

  //   stats
  baseHP = 100;

  constructor(hullConfig: HullConfig) {
    super(hullConfig);
    this.baseHP += hullConfig.hpModifier;
    this.geom = hullConfig.geom;
    this.material = hullConfig.material;
    this.mesh = new THREE.Mesh(this.geom, this.material);
  }
}
