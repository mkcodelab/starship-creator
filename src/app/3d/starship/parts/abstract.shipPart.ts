import * as THREE from 'three';

export interface ShipPartConfig {
  name: string;
}

export abstract class StarshipPart {
  abstract geom: THREE.BufferGeometry;
  abstract material: THREE.Material;
  abstract mesh: THREE.Mesh;
  abstract mass: number;
  name: string;
  constructor(shipPartConfig: ShipPartConfig) {
    this.name = shipPartConfig.name;
  }
}
