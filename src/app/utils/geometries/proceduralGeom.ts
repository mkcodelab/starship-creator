import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BasicSteelMaterial } from '../../3d/materials/materials';

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
// add more parameters
export function createTorusBarrel(
  quantity: number,
  tubeThickness: number,
  spread: number
): THREE.BufferGeometry {
  const toruses = [];
  for (let i = 0; i < quantity; i++) {
    const torus = new THREE.TorusGeometry(0.5, tubeThickness, 6, 6);
    torus.translate(0, 0, i / spread);
    toruses.push(torus);
  }

  const mergedGeom = mergeGeometries(toruses);
  //   mergedGeom.translate(0, 0, -2);
  return mergedGeom;
}

export function createTrapezoid() {
  const height = 3;
  const trapezoid = new THREE.CylinderGeometry(
    0.3,
    0.6,
    height,
    3,
    2,
    false,
    0,
    Math.PI
  );
  trapezoid.rotateX(THREE.MathUtils.degToRad(90));
  trapezoid.rotateZ(THREE.MathUtils.degToRad(90));
  trapezoid.translate(0, 0, -height / 10);
  return trapezoid;
}

// testing standard engine group mesh
// procedurally generated meshes are added to group that is returned
// doing so, we can have multiple materials on element
export function generateStandardEngine() {
  const torus = createTorusBarrel(4, 0.2, 4);
  const cylinder = new THREE.CylinderGeometry(0.3, 0.3, 0.4);

  const torusMesh = new THREE.Mesh(torus, BasicSteelMaterial);
  const cylinderMesh = new THREE.Mesh(
    cylinder,
    new THREE.MeshPhongMaterial({
      color: 0xff8822,
      emissive: 0xff8822,
      emissiveIntensity: 0.5,
    })
  );

  cylinderMesh.rotateX(THREE.MathUtils.degToRad(90));

  const group = new THREE.Group();
  group.add(torusMesh, cylinderMesh);
  return group;
}
