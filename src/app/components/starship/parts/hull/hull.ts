import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

export interface HullConfig extends ShipPartConfig {
  hpModifier: number;
  geom: THREE.BufferGeometry;
  material: THREE.Material;
}

export type ModificationFn = () => void;

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
  // add modification function for different geometries
  //    example: to rotate cylindrical shaped hull
  constructor(hullConfig: HullConfig, rotate?: boolean) {
    super(hullConfig);
    this.baseHP += hullConfig.hpModifier;
    this.geom = hullConfig.geom;
    this.material = hullConfig.material;
    this.mesh = new THREE.Mesh(this.geom, this.material);
    // if (modificationFn) {
    //   modificationFn();
    // }

    if (rotate) {
      this.rotate();
    }
  }
  // maybe move it to ship part abstract class?
  rotate() {
    this.mesh.rotateX(THREE.MathUtils.degToRad(90));
  }
}
