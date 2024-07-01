import * as THREE from 'three';
// create abstract Part class
export class Hull {
  geom = new THREE.BoxGeometry(1, 1, 4);

  material = new THREE.MeshPhongMaterial({
    color: 0xccffaa,
  });

  mainEngineAttachPoint = new THREE.Vector3(0, 0, -2);

  mesh = new THREE.Mesh(this.geom, this.material);
}
