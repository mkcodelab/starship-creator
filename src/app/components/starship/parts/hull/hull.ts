import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

export interface HullConfig extends ShipPartConfig {
  hpModifier: number;
  geom: THREE.BufferGeometry;
}

export class Hull extends StarshipPart {
  //   geom = new THREE.BoxGeometry(1, 1, 4);
  geom: THREE.BufferGeometry;

  material = new THREE.MeshPhongMaterial({
    color: 0xccffaa,
  });

  mesh: THREE.Mesh;

  //   attach points
  mainEngineAttachPoint = new THREE.Vector3(0, 0, -2);

  //   stats
  baseHP = 100;

  constructor(hullConfig: HullConfig) {
    super(hullConfig);
    this.baseHP += hullConfig.hpModifier;
    this.geom = hullConfig.geom;
    this.mesh = new THREE.Mesh(this.geom, this.material);
  }
}
