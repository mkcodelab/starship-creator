import * as THREE from 'three';
export class MainEngine {
  geom = new THREE.CylinderGeometry(0.5, 0.5, 0.5);

  material = new THREE.MeshPhongMaterial({
    color: 0xccccff,
    emissive: 0x333388,
  });

  mesh = new THREE.Mesh(this.geom, this.material);
}
