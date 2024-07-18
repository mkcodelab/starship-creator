import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

// the problem with geom is, it have single material, unless we are using shaderMaterial
// maybe use group with multiple meshes instead single geometry

export interface MainEngineConfig extends ShipPartConfig {
  // mesh instead of geom, we will be creating whole mesh here
  geom: THREE.BufferGeometry;
  material: THREE.Material;
  group?: THREE.Group;
  speed?: number;
  mass?: number;
}

export class MainEngine extends StarshipPart {
  geom: THREE.BufferGeometry;

  material: THREE.Material;
  mesh: THREE.Mesh;

  mass = 50;

  group: THREE.Group;

  constructor(config: MainEngineConfig) {
    super(config);

    if (config.group) {
      this.group = config.group;
    }

    this.geom = config.geom;
    this.material = config.material;
    this.mesh = new THREE.Mesh(this.geom, this.material);

    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }
}
