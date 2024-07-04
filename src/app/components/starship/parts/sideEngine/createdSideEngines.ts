import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

import { SideEngines } from './sideEngine';

export const StandardSideEngine = new SideEngines({
  name: 'Standard Side Engine',
  geom: generateGeom(),
});
//   it would be better if every ship part was a separate glb
//   but for now it will be generated procedurally
function generateGeom(): THREE.BufferGeometry {
  //   width / height/ depth
  //   left engine
  const leftGeom = new THREE.BoxGeometry(0.5, 0.5, 2);
  //   right engine
  const rightGeom = new THREE.BoxGeometry(0.5, 0.5, 2);
  //   connector
  const centerGeom = new THREE.BoxGeometry(2, 0.4, 0.6);
  leftGeom.translate(1, 0, 0);
  rightGeom.translate(-1, 0, 0);

  return mergeGeometries([leftGeom, rightGeom, centerGeom]);
}
