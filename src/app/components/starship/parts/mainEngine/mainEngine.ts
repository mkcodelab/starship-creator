import * as THREE from 'three';
import { ShipPartConfig, StarshipPart } from '../abstract.shipPart';

export class MainEngine extends StarshipPart {
  geom = new THREE.CylinderGeometry(0.5, 0.5, 0.5);

  mass = 50;

  material = new THREE.MeshPhongMaterial({
    color: 0xccccff,
    emissive: 0x333388,
  });

  mesh = new THREE.Mesh(this.geom, this.material);

  constructor(config: ShipPartConfig) {
    super(config);
    this.mesh.rotateX(THREE.MathUtils.degToRad(90));
  }
}
