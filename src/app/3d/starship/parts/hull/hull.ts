import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

export interface HullConfig extends ShipPartConfig {
  hpModifier: number;
  geom: THREE.BufferGeometry;
  material: THREE.Material;
  mass?: number;
}

export class Hull extends StarshipPart {
  geom: THREE.BufferGeometry;

  material: THREE.Material;
  mesh: THREE.Mesh;

  mass: number;

  //   attach points, i guess we need to define them separately for every hull created...
  //   move them to constructor
  wingsAttachPoint: THREE.Vector3;
  mainEngineAttachPoint = new THREE.Vector3(0, 0, -2);

  sideEngineAttachPoint = new THREE.Vector3(0, 0, -1);

  //   stats
  baseHP = 100;
  // add modification function for different geometries
  //    example: to rotate cylindrical shaped hull
  constructor(hullConfig: HullConfig, rotate?: boolean) {
    super(hullConfig);
    this.mass = hullConfig.mass ?? 200;
    this.baseHP += hullConfig.hpModifier;
    this.geom = hullConfig.geom;
    this.material = hullConfig.material;
    this.mesh = new THREE.Mesh(this.geom, this.material);

    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;

    // move rotate to geom generation function
    if (rotate) {
      this.rotate();
    }
  }
  //   move to geom generation function
  rotate() {
    this.mesh.rotateX(THREE.MathUtils.degToRad(90));
  }
}
