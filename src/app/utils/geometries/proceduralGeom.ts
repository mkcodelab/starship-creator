import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

// add some weird parameters here for customization
export function generateSideEngineGeom(): THREE.BufferGeometry {
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

export function createExtrudeGeom(
  width: number,
  length: number,
  depth: number
) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, width);
  shape.lineTo(length, width);
  shape.lineTo(length, 0);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 2,
    depth: depth,
    bevelEnabled: true,
    bevelThickness: 0.8,
    bevelSize: 0.2,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.translate(-length / 2, 0, -depth / 2);
  return geom;
}
