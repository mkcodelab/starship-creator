import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

// geom and material should be optional / deleted
// we should generate geometries via generation function and add them to group.
export interface HullConfig extends ShipPartConfig {
  hpModifier: number;
  geom: THREE.BufferGeometry;
  material: THREE.Material;
  group?: THREE.Group;
  mass?: number;
  mainEngineAttachPoint?: THREE.Vector3;
  wingsAttachPoint?: THREE.Vector3;
  sideEnginesAttachPoint?: THREE.Vector3;
}

export class Hull extends StarshipPart {
  geom: THREE.BufferGeometry;

  material: THREE.Material;
  mesh: THREE.Mesh;

  group: THREE.Group;

  mass: number;

  wingsAttachPoint: THREE.Vector3;
  mainEngineAttachPoint: THREE.Vector3;
  sideEnginesAttachPoint: THREE.Vector3;

  //   stats
  baseHP = 100;

  constructor(config: HullConfig) {
    super(config);
    this.mass = config.mass ?? 200;
    this.baseHP += config.hpModifier;
    this.geom = config.geom;
    this.material = config.material;

    this.mainEngineAttachPoint =
      config.mainEngineAttachPoint ?? new THREE.Vector3(0, 0, -2);

    this.sideEnginesAttachPoint =
      config.sideEnginesAttachPoint ?? new THREE.Vector3(0, 0, -1);

    //   group adding must be updated in starship.ts at corresponding method
    if (config.group) {
      this.group = config.group;
    }

    this.mesh = new THREE.Mesh(this.geom, this.material);

    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }
}
